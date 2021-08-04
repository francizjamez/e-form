import { Box, Input, Button, Modal, Text, HStack } from "native-base";
import React, { useState } from "react";

export default function PartsTable({ partsCollection, setPartsCollection }) {
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
        Parts
      </Box>

      {partsCollection.map((el, i) => {
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
              <Text> {el}</Text>
            </HStack>
          </Box>
        );
      })}

      <AddCorrection />
    </>
  );

  function AddCorrection() {
    const [showModal, setShowModal] = useState(false);
    const [newPart, setNewPart] = useState("");

    const handleTextChange = (text) => {
      setNewPart(text);
    };

    return (
      <>
        <Button onPress={() => setShowModal(true)}>Add new part</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Add new part</Modal.Header>
            <Modal.Body>
              <Input onChangeText={handleTextChange} />
            </Modal.Body>
            <Modal.Footer>
              <Button.Group variant="ghost" space={2}>
                <Button
                  onPress={() => {
                    setShowModal(false);
                    setPartsCollection((prev) => [...prev, newPart]);
                  }}
                >
                  Next
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}
