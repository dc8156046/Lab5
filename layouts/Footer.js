import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View>
      <Text style={styles.footer}>&copy; 2024 Dan Chen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    color: "#666",
    fontSize: 12,
    marginTop: 20,
  },
});
