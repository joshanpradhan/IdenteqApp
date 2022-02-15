import React, { useState } from "react";
import {
	TouchableOpacity,
	Dimensions,
	ImageBackground,
	View,
	StyleSheet,
} from "react-native";
import * as theme from "constants/theme.js";
import { Text, Button } from "components/Index.js";
import * as ImagePicker from "expo-image-picker";
import { BrowsePhotoIconComponent } from "assets/icons/Index.js";
import globalStyles from "utility/globalStyles";

const HEIGHT = Dimensions.get("window").height;
const UploadPhoto=({ navigation })=>{
	const [image, setImage] = useState("");
	const [imageError, setImageError] = useState(true);

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

	return (
		<View style={globalStyles.container}>
			<View style={globalStyles.separator} />
			<TouchableOpacity
				activeOpacity={0.8}
				style={globalStyles.takePhotoContainer}
				onPress={pickImage}
			>
				{image!=="" ? (
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
						<BrowsePhotoIconComponent />
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
	);
};
export default  UploadPhoto;
