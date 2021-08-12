import React from "react";
import { Input, Center, NativeBaseProvider, Heading } from "native-base";
import {
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import Form from "./components/Form";

import { initializeFirebase, addDataToFireStore } from "./firebaseConfig";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Heading style={styles.heading}>MARINE & INDUSTRIAL DIESELS</Heading>
        <Form />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

initializeFirebase();

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingTop: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
  },
});
