import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import ViewImageScreen from "./app/screens/VIewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <ListingDetailsScreen />;
  // return <MessageScreen />;
  // return <AccountScreen />;
  // return <ListingScreen />;
  return (
    <ListingEditScreen />
    // <RegistrationScreen />
    // <LoginScreen />
    // <Screen>
    //   <AppPicker
    //     icon={"apps"}
    //     items={categories}
    //     placeholder={"Categories"}
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //   />
    //   <AppTextInput icon={"email"} />
    // </Screen>
  );
}

const styles = StyleSheet.create({});
