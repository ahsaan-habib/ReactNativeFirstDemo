import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";

export default function AppTextInput({ icon, ...otherProps }) {
  const [textInputContent, setTextInputComponent] = useState("");
  return (
    <>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
        )}
        <TextInput
          style={styles.text}
          onChangeText={(text) => setTextInputComponent(text)}
          // keyboardType="default"
          // secureTextEntry
          {...otherProps}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
});
