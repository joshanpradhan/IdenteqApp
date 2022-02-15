import React, { useState, useRef } from "react";
import {
	Platform,
	ActionSheetIOS,
	UIManager,
	findNodeHandle,
	View,
	TouchableOpacity,
	Image,
	TextInput,
	StyleSheet,
} from "react-native";
import { Text } from "components/Index.js";
import { MaterialIcons } from "@expo/vector-icons";
import * as theme from "constants/theme";

const OptionMenu = (props) => {
	const inputRef = useRef();
	const [open, setOpen] = useState(false);
	const handleClick = (index) => {
		let options = props.options;
		for (var i = 0; i < options.length; i++) {
			if (index === i) {
				if (index === options.length) {
					const open = false;
					setOpen(open);
				} else {
					if (props.actions[i] !== null) {
						props.actions[i]();
					}
				}
			}
		}
	};

	const handlePressWeb = () => {
		setOpen(true);
	};

	const handlePress = () => {
		let options = props.options;
		if (Platform.OS === "ios") {
			let destructiveIndex = -1;
			if (
				Number.isInteger(props.destructiveIndex) &&
				props.destructiveIndex >= 0
			) {
				destructiveIndex = props.destructiveIndex;
			}
			ActionSheetIOS.showActionSheetWithOptions(
				{
					options: options,
					destructiveButtonIndex: destructiveIndex,
					cancelButtonIndex: options.length - 1,
				},
				(buttonIndex) => {
					handleClick(buttonIndex);
				}
			);
		} else if (Platform.OS === "android") {
			UIManager.showPopupMenu(
				findNodeHandle(inputRef.current),
				options,
				() => console.log("something went wrong with the popup menu"),
				(e, i) => {
					handleClick(i);
				}
			);
		}
	};

	let options = open ? (
		<View
			style={{
				position: "absolute",
				bottom: "100%",
				right: "50%",
				flex: 1,
				elevation: 3,
				shadowColor: "black",
				shadowOpacity: 0.3,
				shadowOffset: { width: 0, height: 2 },
				shadowRadius: 4,
				borderRadius: 5,
				backgroundColor: "white",
			}}
		>
			{props.options.map((option, index) => {
				return (
					<View key={option}>
						<TouchableOpacity
							style={{ padding: 10 }}
							onPress={() => handleClick(index)}
						>
							<Text style={{ textAlign: "center" }}>
								{option}
							</Text>
						</TouchableOpacity>

						{index < props.options.length - 1 && (
							<View
								style={{
									flex: 1,
									height: 1,
									backgroundColor: "lightgray",
								}}
							/>
						)}
					</View>
				);
			})}
		</View>
	) : null;

	let component = props.button ? (
		<Image source={props.button} style={props.buttonStyle} />
	) : (
		props.customButton
	);
	if (Platform.OS === "web") {
		return (
			<View>
				<View>
					<TouchableOpacity ref={inputRef} onPress={handlePressWeb}>
						{component}
					</TouchableOpacity>
				</View>
				{options}
			</View>
		);
	} else {
		return (
			<TouchableOpacity
				ref={inputRef}
				onPress={handlePress}
				activeOpacity={0.9}
			>
				<Text bold style={styles.label}>{props.label}</Text>
				<View style={styles.buttonConatiner}>
					<TextInput
						disableFullscreenUI={true}
						style={styles.inputText}
						editable={false}
						value={props.value}
						autoCorrect={false}
						returnKeyType="next"
					/>
					<MaterialIcons
						name="keyboard-arrow-down"
						size={18}
						color={"#676767"}
					/>
				</View>
			</TouchableOpacity>
		);
	}
};

export default OptionMenu;

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center" },
	formContainer: { width: "90%" },
	label: {
		fontSize: 14,
	},
	buttonConatiner: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#B1ACAC",
		borderBottomWidth: 1,
		borderRadius: 2,
	},
	buttonContainer: {
		paddingTop: 30,
	},
	inputText: {
		fontSize: 14,
		color: theme.colors.solidGray,
		height: 50,
	},
});
