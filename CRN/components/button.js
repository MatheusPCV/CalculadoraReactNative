import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button({ title, onPress, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
    borderRadius: "50%",
    margin: 3,
    padding: 15,
  },
  buttonText: {
    fontSize: 34,
    color: "#fff",
  },
});

export default Button;
