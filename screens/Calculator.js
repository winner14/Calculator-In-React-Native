import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function Calculator() {
  const openLink = () => {
    Linking.openURL("https://twitter.com/winnerkpodo");
  };

  var [num1, setNum1] = useState(0);
  var [num2, setNum2] = useState(0);
  var [operation, setOperation] = useState(0);
  var [result, setResult] = useState(0);

  const finalResult = () => {
    switch (operation) {
      case "+":
        setResult((result = num1 + num2));
        break;
      case "-":
        setResult((result = num1 - num2));
        break;
      case "*":
        setResult((result = num1 * num2));
        break;
      case "/":
        setResult((result = num1 / num2));
        break;
      default:
        alert("Invalid Inputs");
    }
    setOperation("");
    num1 = num2;
    setNum2(0);
  };

  const clear = () => {
    setResult(0);
    setOperation("");
    setNum1(0);
    setNum2(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{result}</Text>
      </View>
      <View style={styles.keys}>
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.oneKey} onPress={clear}>
            <Text style={styles.keyText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (num2 === 0 && num1 > 0) num1 = -num1;
              if (num2 != 0 && num2 > 0) num2 = -num2;
            }}
          >
            <Text style={styles.keyText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (num2 != 0) num1 = num2;
              setResult((result = num1 / 100));
            }}
          >
            <Text style={styles.keyText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              setOperation("/");
            }}
          >
            <Text style={styles.keyText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(7);
              else setNum2(7);
            }}
          >
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(8);
              else setNum2(8);
            }}
          >
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(9);
              else setNum2(9);
            }}
          >
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              setOperation("*");
            }}
          >
            <Text style={styles.keyText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(4);
              else setNum2(4);
            }}
          >
            <Text style={styles.keyText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(5);
              else setNum2(5);
            }}
          >
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(6);
              else setNum2(6);
            }}
          >
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              setOperation("-");
            }}
          >
            <Text style={styles.keyText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(1);
              else setNum2(1);
            }}
          >
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(2);
              else setNum2(2);
            }}
          >
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(3);
              else setNum2(3);
            }}
          >
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              setOperation("+");
            }}
          >
            <Text style={styles.keyText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.oneKey}
            onPress={() => {
              if (operation === "") setNum1(0);
              else setNum2(0);
            }}
          >
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity style={styles.oneKey}>
              <Text style={styles.keyText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.lastKey]} onPress={finalResult}>
              <Text style={styles.keyText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Designed by Kpodo Winner Junior</Text>
        <TouchableOpacity onPress={openLink}>
          <Text style={{ color: "rgba(245, 61, 61, 0.8)" }}>
            Twitter: @winnerkpodo
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(181, 227, 245)",
    height: "100%",
    // margin: 3,
  },
  display: {
    // flex: 1,
    height: "25%",
    backgroundColor: "rgb(213, 237, 247)",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 5,
  },
  displayText: {
    fontSize: 60,
    fontWeight: "300",
    alignSelf: "flex-end",
  },
  keys: {
    margin: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  keyRow: {
    // flex: 1,
    flexDirection: "row",
  },
  oneKey: {
    width: 20,
    height: 85,
    borderRadius: 15,
    margin: 2,
    flex: 1,
    backgroundColor: "rgb(119, 187, 214)",
    alignItems: "center",
    justifyContent: "center",
  },
  lastKey: {
    flex: 1,
    width: 20,
    margin: 2,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(119, 187, 214)",
  },
  keyText: {
    fontSize: 45,
    fontWeight: "400",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  footerText: {
    color: "rgba(0, 0, 0, 0.5)",
  },
});
