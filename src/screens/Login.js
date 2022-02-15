import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import { LoginValidationSchema } from "utility/ValidationSchema.js";
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
import { showMessage } from "react-native-flash-message";
const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const onSubmitLogin = (values) => {
    if (values.username == "joshan" && values.password == "joshan") {
      showMessage({
        message: "Logged In Successfully!",
        type: "success",
      });
      navigation.navigate("Home");
    } else {
      showMessage({
        message: "Please check your credentials!",
        type: "danger",
      });
    }
  };

  LogBox.ignoreAllLogs();
  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: "40%" }}>
      <IdenteqLogoIconComponent />
      <View style={{ paddingVertical: "10%" }} />
      <Formik
        enableReinitialize={true}
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          onSubmitLogin(values);
        }}
        validationSchema={LoginValidationSchema}
      >
        {({
          handleChange,
          touched,
          setFieldTouched,
          handleSubmit,
          values,
          errors,
        }) => (
          <View style={{ width: "90%" }}>
            <FormInput
              IconComponent={UsernameIconComponent}
              onChangeText={handleChange("username")}
              onBlur={() => {
                setFieldTouched("username");
              }}
              placeholder="Username"
              value={values.username}
              visible={touched.username}
              error={errors.username}
              // style={{
              //   borderColor:
              //     touched.username && errors.username ? "#DE4132" : "#F7F8F9",
              //   borderWidth: 1,
              //   paddingHorizontal: 6,
              //   borderRadius: 2,
              // }}
            />
            <ErrorMessage error={errors.username} visible={touched.username} />
            <FormInput
              IconComponent={PasswordIconComponent}
              password
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={() => {
                setFieldTouched("password");
              }}
              value={values.password}
              visible={touched.password}
              error={errors.password}
              // style={{
              //   borderColor:
              //     touched.password && errors.password ? "#DE4132" : "#F7F8F9",
              //   borderWidth: 1,
              //   paddingHorizontal: 6,
              //   borderRadius: 2,
              // }}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

            <View style={{ flex: 0, paddingTop: 30, paddingBottom: 24 }}>
              {!errors.username || !errors.password ? (
                <Button onPress={handleSubmit}>
                  <Text button style={{ fontSize: 18 }}>
                    Login
                  </Text>
                </Button>
              ) : (
                <Button>
                  <Text button style={{ fontSize: 18 }}>
                    Login
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

export default Login;
