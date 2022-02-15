import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, LogBox, StyleSheet } from "react-native";
import { Formik } from "formik";
import { UpdateValidationSchema } from "utility/ValidationSchema.js";
import * as theme from "constants/theme.js";
import {
	IdenteqLogoIconComponent,
	UsernameIconComponent,
	PasswordIconComponent,
} from "assets/icons/Index.js";
import {
	Button,
	Text,
	FormInput,
	ErrorMessage,
	CustomActivityIndicator,
} from "components/Index.js";
import API from "api/API";
import OptionMenu from "./OptionMenu";

const EditProfile = ({ navigation }) => {
	const [show, setShow] = useState(false);
	const [genderType, setGenderType] = useState("Select");
	const [genderTypeError, setGenderTypeError] = useState(false);
	const handleMaleGenderType = () => {
		setGenderType("Male");
		setGenderTypeError(false);
	};
	const handleFemaleGenderType = () => {
		setGenderType("Female");
		setGenderTypeError(false);
	};
	const handleOtherGenderType = () => {
		setGenderType("Other");
		setGenderTypeError(false);
	};

	const onSubmitUpdate = (values) => {
		// const loginData = new LoginProto.LoginRequest();
		// loginData.setEmailphone(values.username);
		// loginData.setPassword(values.password);
		// login(loginData);
		console.log("submitted");
	};

	LogBox.ignoreAllLogs();
	return (
		<View style={styles.container}>
			<Formik
				enableReinitialize={true}
				initialValues={{
					name: "",
					email: "",
					phoneNo: "",
				}}
				onSubmit={(values) => {
					onSubmitUpdate(values);
				}}
				validationSchema={UpdateValidationSchema}
			>
				{({
					handleChange,
					touched,
					setFieldTouched,
					handleSubmit,
					values,
					errors,
				}) => (
					<View style={styles.formContainer}>
						<FormInput
							label="Name"
							onChangeText={handleChange("name")}
							onBlur={() => {
								setFieldTouched("name");
							}}
							value={values.name}
							style={{
								borderColor:
									touched.name && errors.name
										? "#DE4132"
										: "#B1ACAC",
										borderBottomWidth:1
							}}
						/>
						<ErrorMessage
							error={errors.name}
							visible={touched.name}
						/>
						<FormInput
							label="Email"
							onChangeText={handleChange("email")}
							onBlur={() => {
								setFieldTouched("email");
							}}
							value={values.email}
							style={{
								borderColor:
									touched.email && errors.email
										? "#DE4132"
										: "#B1ACAC",
										borderBottomWidth:1
							}}
						/>
						<ErrorMessage
							error={errors.email}
							visible={touched.email}
						/>

						<FormInput
							phone
							label="Phone Number"
							onChangeText={handleChange("phoneNo")}
							onBlur={() => {
								setFieldTouched("phoneNo");
							}}
							value={values.phoneNo}
							style={{
								borderColor:
									touched.phoneNo && errors.phoneNo
										? "#DE4132"
										: "#B1ACAC",
							}}
						/>
						<ErrorMessage
							error={errors.phoneNo}
							visible={touched.phoneNo}
						/>
						<OptionMenu
							button={
								<Text
									style={{
										color: "white",
									}}
								>
									Actions
								</Text>
							}
							destructiveIndex={1}
							options={["Male", "Female", "Other"]}
							actions={[
								handleMaleGenderType,
								handleFemaleGenderType,
								handleOtherGenderType,
							]}
							value={genderType}
							label="Gender"
						/>
						<ErrorMessage
							error={"Gender type is a required field"}
							visible={genderTypeError}
						/>
						<View style={styles.buttonContainer}>
							{!errors.username || !errors.password ? (
								<Button onPress={handleSubmit}>
									<Text button style={{ fontSize: 18 }}>
										Update
									</Text>
								</Button>
							) : (
								<Button>
									<Text button style={{ fontSize: 18 }}>
										Update
									</Text>
								</Button>
							)}
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default EditProfile;

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center", paddingTop: "6%" },
	formContainer: { width: "90%" },
	buttonContainer: {
		paddingTop: 30,
	},
});
