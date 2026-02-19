import { Input } from "@/components/Input";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/image1.png")}
        style={styles.ilustration}
      />
      <Input placeholder="Nome Completo" />
      <Input placeholder="E-mail" keyboardType="email-address" />
      <Input placeholder="Senha" secureTextEntry />
      <Input placeholder="Senha de novo" secureTextEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  ilustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860",
  },
  footerLink: {
    color: "#0929b8",
    fontWeight: 700,
  },
});
