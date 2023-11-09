import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Display({ displayValue }) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{displayValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    flex: 2,
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#333",
  },
  displayText: {
    fontSize: 48,
    color: "#fff",
  },
});

export default Display;
