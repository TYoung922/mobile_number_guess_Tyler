import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Component1 from "./Components/Component1";

export default function App() {
  return (
    <View style={styles.container}>
      <Component1 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002500",
  },
});
