import { FormControl, Input, Stack, TextArea } from "native-base";
import React from "react";

export default function FormInput({
  label,
  placeholder,
  helperText,
  errorMessage,
  type,
  style,
  onChangeText,
}) {
  return (
    <FormControl style={style} isRequired>
      <Stack mx={2}>
        <FormControl.Label>{label}</FormControl.Label>
        {type === "textarea" && (
          <TextArea
            onChangeText={onChangeText}
            h={24}
            placeholder={placeholder}
          />
        )}

        {type !== "textarea" && (
          <Input
            onChangeText={onChangeText}
            type={type || "text"}
            placeholder={placeholder}
            my={2}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        )}

        <FormControl.HelperText>{helperText}</FormControl.HelperText>
        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
}
