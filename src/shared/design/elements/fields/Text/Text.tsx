import { type TextInputProps, StyleSheet, TextInput } from "react-native";

import { useTheme } from "#shared/settings";

export type TextFieldProps = {
  onChange: (value: string) => void;
  value: string;
} & Omit<TextInputProps, "onChange" | "value" | "onChangeText">;

const TextField: React.FC<TextFieldProps> = ({
  onChange,
  value,
  style,
  ...props
}) => {
  const colors = useTheme();

  const bodyColor = { color: colors.body, borderColor: colors.muted };
  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      style={[styles.input, style, bodyColor]}
      {...props}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    lineHeight: 16,
    borderRadius: 10,
  },
});
