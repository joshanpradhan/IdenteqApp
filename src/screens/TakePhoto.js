import React, { useState, useEffect } from "react";
import {
	TouchableOpacity,
	Dimensions,
	ImageBackground,
	View,
	StyleSheet,
	Modal,
} from "react-native";
import * as theme from "constants/theme.js";
import { Text, Button } from "components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import {
	TakePhotoIconComponent,
	CameraIconComponent,
	FlashIconComponent,
} from "assets/icons/Index.js";
import globalStyles from "utility/globalStyles";
import { Camera } from "expo-camera";

const CameraModal = (props) => {
	const [cameraRef, setCameraRef] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	if (props.hasPermission === null) {
		return <View />;
	} else if (props.hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={true}
			onRequestClose={() => {
				props.setModalVisible();
			}}
		>
			<Camera
				style={{ flex: 1 }}
				ratio="16:9"
				autoFocus={Camera.Constants.AutoFocus.on}
				flashMode={Camera.Constants.FlashMode.off}
				type={type}
				ref={(ref) => {
					setCameraRef(ref);
				}}
			>
				<View
					style={{
						flex: 1,
					}}
				>
					<View style={styles.closeAndCameraFlipContainer}>
						<TouchableOpacity
							onPress={() => {
								props.setModalVisible();
							}}
						>
							{/*<FlashIconComponent />*/}
							<Ionicons name="close" size={30} color="white" />
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setType(
									type === Camera.Constants.Type.back
										? Camera.Constants.Type.front
										: Camera.Constants.Type.back
								);
							}}
						>
							<CameraIconComponent />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.clickButtonOuterContainer}>
					<View style={styles.clickButtonInnerContainer}>
						<TouchableOpacity
							onPress={async () => {
								if (cameraRef) {
									let photo = await cameraRef.takePictureAsync();
									props.setImage(photo);
									props.setModalVisible();
								}
							}}
						>
							<View style={styles.clickButtonOuterCircle}>
								<View
									style={styles.clickButtonInnerCircle}
								></View>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</Camera>
		</Modal>
	);
};

const TakePhoto = ({ navigation }) => {
	const [image, setImage] = useState("");
	const [imageError, setImageError] = useState(true);
	const [camera, setShowCamera] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			// imageUpload(result.uri);
			setImage(result.uri);
			setImageError(false);
		}
	};
	const handleSearch = () => {
		if (image == "") {
			setImageError(true);
		} else {
			setImageError(false);
		}
	};

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);
	return (
		<>
			<View style={globalStyles.container}>
				<View style={globalStyles.separator} />
				<TouchableOpacity
					activeOpacity={0.8}
					style={globalStyles.takePhotoContainer}
					// onPress={pickImage}
					onPress={() => {
						setShowCamera(true);
					}}
				>
					{image !== "" ? (
						<ImageBackground
							style={globalStyles.imageContainer}
							source={{ uri: image }}
						>
							<View style={globalStyles.editContainer}>
								<Text
									center
									style={{
										color: "white",
									}}
								>
									Edit
								</Text>
							</View>
						</ImageBackground>
					) : (
						<View style={globalStyles.iconContainer}>
							<TakePhotoIconComponent />
						</View>
					)}
				</TouchableOpacity>
				<View
					style={{
						paddingVertical: "6%",
					}}
				/>
				<Button onPress={() => handleSearch()} disabled={imageError}>
					<Text button>Search</Text>
				</Button>
			</View>
			{camera && (
				<CameraModal
					showModal={camera}
					setModalVisible={() => setShowCamera(false)}
					setImage={(result) => {
						setImage(result.uri);
						// imageUpload(result.uri);
					}}
					hasPermission={hasPermission}
				/>
			)}
		</>
	);
};

export default TakePhoto;

const styles = StyleSheet.create({
	clickButtonOuterContainer: {
		flex: 1,
		justifyContent: "flex-end",
	},
	clickButtonInnerContainer: {
		flexDirection: "row",
		backgroundColor: "#565656",
		justifyContent: "center",
		paddingHorizontal: "10%",
		paddingVertical: "2%",
	},

	clickButtonOuterCircle: {
		borderWidth: 2,
		borderRadius: 50,
		borderColor: "white",
		height: 60,
		width: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	clickButtonInnerCircle: {
		borderRadius: 50,
		height: 50,
		width: 50,
		backgroundColor: "white",
	},
	closeAndCameraFlipContainer: {
		backgroundColor: "#565656",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: "10%",
		paddingVertical: "3%",
	},
});
