import { type SwitchProps, Switch } from "react-native";

import { useTheme } from "#shared/settings";

export type ToggleFieldProps = {
  onChange: (value: boolean) => void;
  value: boolean;
} & Omit<SwitchProps, "onChange" | "value" | "onValueChange">;

const ToggleField: React.FC<ToggleFieldProps> = ({
  onChange,
  value,
  style,
  ...props
}) => {
  const colors = useTheme();

  return (
    <Switch
      onValueChange={onChange}
      value={value}
      thumbColor={colors.body}
      trackColor={{ false: colors.muted, true: colors.brand }}
      style={[style]}
      {...props}
    />
  );
};

export default ToggleField;
