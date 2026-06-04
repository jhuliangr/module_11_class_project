import { type LinkProps, Link } from "expo-router";
import { type StyleProp, type TextStyle, StyleSheet, Text } from "react-native";

import { typography } from "#design/foundations";
import { useTheme } from "#shared/settings";

export type TypographyProps = {
  variant?: keyof typeof typography;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
} & (
  | { href?: never }
  | Pick<LinkProps, "href" | "replace" | "push" | "dismissTo">
);

const Typography: React.FC<TypographyProps> = ({
  variant = "normal",
  style,
  children,
  ...props
}) => {
  const colors = useTheme();
  const bodyColor = { color: colors.body };

  if ("href" in props && props.href) {
    return (
      <Link {...props} style={[bodyColor, styles[variant], style]}>
        {children}
      </Link>
    );
  }

  return (
    <Text {...props} style={[bodyColor, styles[variant], style]}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create(typography);
