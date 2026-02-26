import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  label: string;
};
export function Button({ label, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    backgroundColor: "#360606ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  label: {
    color: "#c0392b",
    fontSize: 16,
    fontWeight: 600,
  },
});
