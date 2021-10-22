import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import AppForm from "../components/form/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* {() => (
          <> */}
        {/* <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            /> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        {/* <AppText style={{ color: "red" }}>{errors.email}</AppText> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
        {/* <AppButton title="Login" onPress={() => handleSubmit()} /> */}
        <SubmitButton title="Login" />
        {/* </>
        )} */}
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 20,
  },
});
