import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Display from "./components/display"; // Importe o componente Display
import Button from "./components/button"; // Importe o componente Button

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");

  const handleNumberInput = (num) => {
    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (newOperator) => {
    setOperator(newOperator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "-") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "*") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "/") {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };

  return (
    <View style={styles.container}>
      <Display displayValue={displayValue} />
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleNumberInput(7)} />
          <Button title="8" onPress={() => handleNumberInput(8)} />
          <Button title="9" onPress={() => handleNumberInput(9)} />
          <Button title="÷" onPress={() => handleOperatorInput("/")} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleNumberInput(4)} />
          <Button title="5" onPress={() => handleNumberInput(5)} />
          <Button title="6" onPress={() => handleNumberInput(6)} />
          <Button title="×" onPress={() => handleOperatorInput("*")} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleNumberInput(1)} />
          <Button title="2" onPress={() => handleNumberInput(2)} />
          <Button title="3" onPress={() => handleNumberInput(3)} />
          <Button title="-" onPress={() => handleOperatorInput("-")} />
        </View>
        <View style={styles.row}>
          <Button
            title="0"
            onPress={() => handleNumberInput(0)}
            buttonStyle={styles.zeroButton}
          />
          <Button title="+" onPress={() => handleOperatorInput("+")} />
          <Button
            title="="
            onPress={handleEqual}
            buttonStyle={styles.equalButton}
            textStyle={styles.equalButtonText}
          />
        </View>
        <Button title="C" onPress={handleClear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
  },
  buttonContainer: {
    height: 500,
    width: "90%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  zeroButton: {
    flex: 2,
    paddingLeft: 35,
    paddingRight: 35,
  },
  equalButton: {
    flex: 1,
    backgroundColor: "#ff9500",
  },
  equalButtonText: {
    fontSize: 32,
  },
  clearButton: {
    marginTop: 10,
    padding: 10,
  },
});

export default App;
