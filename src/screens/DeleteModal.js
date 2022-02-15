import React from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	View,
	Modal,
	StyleSheet,
} from "react-native";
import { Text } from "components/Index.js";
import * as theme from "constants/theme";
import globalStyles from "utility/globalStyles";

const DeleteModal = ({ deleteModalVisible, setDeleteModalVisible }) => {
	return (
		<SafeAreaView>
			<Modal
				visible={deleteModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() => {
					setDeleteModalVisible(false);
				}}
			>
				<View style={globalStyles.modalContainer}>
					<View
						style={[
							globalStyles.modal,
							{ paddingHorizontal: "10%", paddingVertical: "6%" },
						]}
					>
						<Text
							light
							style={{
								color: "#666666",
							}}
						>
							Are you sure you want to Delete ? Once deleted can’t
							be recovered.
						</Text>
						<View style={styles.separator} />
						<View style={styles.buttonContainer}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => {
									setDeleteModalVisible(false);
								}}
								style={[
									styles.button,
									{
										borderWidth: 1,
										borderColor: theme.colors.primary1,
									},
								]}
							>
								<Text
									bold
									style={{
										color: theme.colors.primary1,
									}}
								>
									Cancel
								</Text>
							</TouchableOpacity>
							<View style={{ flex: 0.2 }} />
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => {
									setDeleteModalVisible(false);
								}}
								style={[
									styles.button,
									{ backgroundColor: theme.colors.primary1 },
								]}
							>
								<Text
									bold
									style={{
										color: theme.colors.white,
									}}
								>
									Ok
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

export default DeleteModal;

const styles = StyleSheet.create({
	separator: {
	 paddingVertical: "4%" 
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		flex: 1,
		paddingVertical: "3%",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
});
