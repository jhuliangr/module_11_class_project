import { type StyleProp, type ViewStyle, StyleSheet, View } from "react-native";

import { shapes, spacing } from "#design/foundations";
import { useTheme } from "#shared/settings";

export type CardProps = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ style, children, ...props }) => {
  const colors = useTheme();

  return (
    <View
      {...props}
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          boxShadow: `0px 2px 4px ${colors.shadow}`,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: spacing.inside,
    margin: spacing.between,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: shapes.borderRadius,
  },
});
