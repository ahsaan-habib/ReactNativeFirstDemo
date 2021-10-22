import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  placeholder,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
        )}
        {selectedItem ? (
          <AppText style={styles.text}>{selectedItem.label}</AppText>
        ) : (
          <AppText style={styles.placeholder}>{placeholder}</AppText>
        )}
        <MaterialCommunityIcons name={"chevron-down"} size={20} />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </TouchableWithoutFeedback>
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
  icon: {
    marginRight: 15,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    color: "#000",
    flex: 1,
  },
});
