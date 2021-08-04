import {
  Button,
  FormControl,
  Input,
  Stack,
  TextArea,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { addDataToFireStore } from "../firebaseConfig";
import CorrectionTable from "./CorrectionTable";
import FormInput from "./FormInput";
import PartsTable from "./PartsTable";

export default function Form() {
  const [partsCollection, setPartsCollection] = useState([]);
  const [correctionCollection, setCorrectionCollection] = useState([]);
  const [data, setData] = useState({});

  const setDataProperty = (key, value) => {
    setData((prev) => {
      const newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const submitData = () => {
    const newData = { ...data };
    newData.partsCollection = partsCollection;
    newData.correctionCollection = correctionCollection;

    addDataToFireStore(newData);
  };
  return (
    <ScrollView>
      <FormInput
        onChangeText={(text) => setDataProperty("Customer", text)}
        label="Customer"
        placeholder="Enter your name"
      />
      <FormInput
        onChangeText={(text) => setDataProperty("Order_number", text)}
        label="Order Number"
        placeholder="Place your order number"
      />
      <FormInput
        onChangeText={(text) => setDataProperty("Engine_serial_number", text)}
        label="Engine Serial Number"
        placeholder="Engine Serial Number"
      />
      <FormInput
        onChangeText={(text) => setDataProperty("Rego/Machine/Unit", text)}
        label="Rego/Machine/Unit"
        placeholder="Rego/Machine/Unit"
      />
      <FormInput
        onChangeText={(text) => setDataProperty("Km/Hours", text)}
        label="Km/Hours"
        placeholder="Km/Hours"
      />
      <FormInput
        onChangeText={(text) => setDataProperty("Complaint", text)}
        type="textarea"
        label="Complaint"
        placeholder="Please describe your complaint"
      />
      <FormInput
        type="textarea"
        label="Cause"
        onChangeText={(text) => setDataProperty("Cause", text)}
        placeholder="Please explain how and why the error happened"
      />
      <VStack space={4}>
        <CorrectionTable
          correctionCollection={correctionCollection}
          setCorrectionCollection={setCorrectionCollection}
        />
        <PartsTable
          partsCollection={partsCollection}
          setPartsCollection={setPartsCollection}
        />
        <FormInput label="Travel: " placeholder="Total KMS" />
        <Button
          onPress={submitData}
          style={{ alignSelf: "center", marginBottom: 20 }}
        >
          Submit
        </Button>
      </VStack>
    </ScrollView>
  );
}
