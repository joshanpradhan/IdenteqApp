import { StyleSheet,Dimensions } from "react-native";
import * as theme from "constants/theme.js";
const HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	separator: { paddingVertical: "2.5%" },
	modalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	modal: {
		borderRadius: 6,
		backgroundColor: "white",
		height: "auto",
		maxHeight: "60%",
		width:"80%"
	},
	smallButton: {
		borderRadius: 4,
		height: 48,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#018064",
		marginTop: 16,
		paddingVertical: "3%",
		paddingHorizontal: "8%",
	},
	takePhotoContainer: {
		alignItems: "center",
		paddingHorizontal: "20%",
		paddingVertical: "10%",
		borderStyle: "dashed",
		borderWidth: 1,
		borderRadius: 1,
	},
	imageContainer: {
		height: HEIGHT / 4,
		width: "100%",
		justifyContent: "flex-end",
	},
	editContainer: {
		backgroundColor: "rgba(52, 52, 52, 0.6)",
		paddingVertical: 4,
	},
	iconContainer: {
		height: HEIGHT / 4,
		flexDirection: "row",
		alignItems: "center",
	},
	
});
