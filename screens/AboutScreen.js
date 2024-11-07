import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>App name: To Do List App</Text>
        <Text style={styles.text}>Developer name: Dan Chen</Text>
        <Text style={styles.text}>
          Date: {new Date().toLocaleDateString("en-US")}
        </Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#38434D",
    textAlign: "center",
  },
});
