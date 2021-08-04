import {
  Box,
  FormControl,
  Input,
  Stack,
  TextArea,
  Button,
  Modal,
  Heading,
  Text,
  HStack,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CorrectionTable({
  correctionCollection,
  setCorrectionCollection,
}) {
  return (
    <>
      <Box
        bg="black"
        p={4}
        _text={{
          textAlign: "center",
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Corrections
      </Box>

      {correctionCollection.map((el, i) => {
        const { name, date } = el;
        return (
          <Box
            key={i}
            bg="white"
            p={4}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <HStack style={{ justifyContent: "space-between" }}>
              <Text> {name}</Text>
              <Text> {date.toLocaleDateString()}</Text>
            </HStack>
          </Box>
        );
      })}

      <AddCorrection />
    </>
  );

  function AddCorrection() {
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [newCorrection, setNewCorrection] = useState({
      date: new Date(Date.now()),
    });

    const stepCpy = step;

    useEffect(() => {
      console.log("this is mounted");
    }, []);

    const addNewCorrection = () => {
      setShowModal(true);
    };

    const setCorrectionProperty = (key, value) => {
      setNewCorrection((prev) => {
        const newCorrection = { ...prev };
        newCorrection[key] = value;
        return newCorrection;
      });
    };

    const handleNameChange = (text) => {
      setCorrectionProperty("name", text);
    };

    return (
      <>
        <Button onPress={() => addNewCorrection()}>Add new correction</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Add new correction</Modal.Header>
            <Modal.Body>
              <Input onChangeText={handleNameChange} />
            </Modal.Body>
            <Modal.Footer>
              <Button.Group variant="ghost" space={2}>
                <Button
                  onPress={() => {
                    setShowModal(false);
                    setStep(1);
                  }}
                >
                  Next
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        {stepCpy === 1 && (
          <View>
            <Heading>Enter Date</Heading>
            <DateTimePicker
              testID="datePicker"
              value={newCorrection.date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={(e, selectedDate) => {
                console.log("changed data");
                setStep(() => 0);
                setCorrectionProperty("date", selectedDate);
                setCorrectionCollection((prev) => [...prev, newCorrection]);
              }}
            />
          </View>
        )}
      </>
    );
  }
}
