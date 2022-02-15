import React, { useState } from "react";
import {
	TouchableOpacity,
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";
import * as theme from "constants/theme.js";
import { Text, Button, ErrorMessage, FormInput } from "components/Index.js";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AddURLValidation } from "utility/ValidationSchema.js";
import globalStyles from "utility/globalStyles";

const AddURL = ({ navigation }) => {
	const [image, setImage] = useState("https://picsum.photos/seed/picsum/200/300");
	const [checked, setChecked] = useState(false);
	return (
		<View style={styles.container}>
			<View style={styles.separator} />
			<Formik
				initialValues={{
					url: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={AddURLValidation}
			>
				{({
					handleChange,
					touched,
					setFieldTouched,
					handleSubmit,
					values,
					errors,
				}) => (
					<>
						<FormInput
							onChangeText={handleChange("url")}
							onBlur={() => {
								setFieldTouched("url");
							}}
							placeholder={"Add url here"}
							value={values.url}
							style={{
								borderColor: touched.url
									? "#D93025"
									: "#C9CACF",
									borderWidth:1,
									paddingHorizontal:6,
									borderRadius:2

							}}
						/>
						<ErrorMessage
							error={errors.url}
							visible={touched.url}
						/>
						{image == "" ? (
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => setChecked(!checked)}
								style={{ flexDirection: "row" }}
							>
								{checked ? (
									<MaterialCommunityIcons
										name="checkbox-marked"
										size={24}
										color={theme.colors.primary1}
									/>
								) : (
									<MaterialCommunityIcons
										name="checkbox-blank-outline"
										size={24}
										color={theme.colors.solidGray}
									/>
								)}
								<Text light style={{ paddingHorizontal: 8 }}>
									Deep Search
								</Text>
							</TouchableOpacity>
						) : (
							<View style={globalStyles.takePhotoContainer}>
								<ImageBackground
									style={globalStyles.imageContainer}
									source={{ uri: image }}
								></ImageBackground>
							</View>
						)}

						<View style={{ paddingVertical: "2%" }} />
						{!errors.url ? (
							<Button onPress={handleSubmit}>
								<Text button>Search</Text>
							</Button>
						) : (
							<Button>
								<Text button>Search</Text>
							</Button>
						)}
					</>
				)}
			</Formik>
		</View>
	);
};
export default AddURL;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	separator: { paddingVertical: "1%" },
});
