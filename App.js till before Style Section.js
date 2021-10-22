import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/VIewImageScreen";

export default function App() {
  console.log("App started!");
  // console.log(StatusBar.currentHeight);
  // const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  // console.log(windowWidth, windowHeight);

  // console.log(useDimensions(), useDeviceOrientation());

  // const { landscape } = useDeviceOrientation();

  return <WelcomeScreen />;
  return <ViewImageScreen />;

  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: "#fff234",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "gold",
          }}
        />
        <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "red" }} />

        <View style={styles.container1}>
          <Text>Hello Native App!</Text>
          <TouchableHighlight onPress={() => console.log("image1 tapped!")}>
            <Image
              style={styles.logoImage}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </TouchableHighlight>
          <TouchableOpacity>
            <View
              style={{
                width: "100%",
                height: landscape ? "100%" : "50%",
                backgroundColor: "#fafefe",
              }}
            ></View>
          </TouchableOpacity>
          <TouchableNativeFeedback>
            <View
              style={{ width: 200, height: 60, backgroundColor: "red" }}
            ></View>
          </TouchableNativeFeedback>
          <Image
            style={styles.logoImage}
            source={require("./app/assets/favicon.png")}
          />

          <Button
            onPress={() =>
              Alert.alert("Test Title", "This is a test Message", [
                {
                  text: "Yes",
                  onPress: () => console.log("Yes button Pressed!"),
                },
                {
                  text: "No",
                  onPress: () => console.log("No Button pressed!"),
                },
              ])
            }
            title="Test Button"
            color="blue"
          />

          <StatusBar style="auto" />
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff234",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
});
