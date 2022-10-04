import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Calculator() {
  const openLink = () => {
    Linking.openURL("https://twitter.com/winnerkpodo");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>0.00</Text>
      </View>
      <View style={styles.keys}>
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.oneKey}>
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity style={styles.oneKey}>
              <Text style={styles.keyText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.lastKey]}>
              <Text style={styles.keyText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Designed by Kpodo Winner Junior</Text>
        <TouchableOpacity onPress={openLink}>
          <Text style={styles.footerText}>Twitter: @winnerkpodo</Text>
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
