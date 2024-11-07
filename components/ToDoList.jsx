import React from "react";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {(tasks || []).map((task, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        >
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  pressable: {
    marginVertical: 5,
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: "#f0f0f0",
  },
  task: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});
