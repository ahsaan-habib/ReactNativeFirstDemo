import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Title1",
    description: "Description1",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
    image: require("../assets/jacket.jpg"),
  },
];

export default function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, SetRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages

    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("List item tapped!")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/jacket.jpg"),
            },
          ]);
        }}
      />
      <Text></Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
