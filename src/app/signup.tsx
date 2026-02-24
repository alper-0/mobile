import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Signup() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("@/assets/senju.png")}
            style={styles.ilustration}
          />
          <Input placeholder="Nome Completo" placeholderTextColor="#6b3f3f" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            placeholderTextColor="#6b3f3f"
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#6b3f3f"
          />
          <Input
            placeholder="Senha de novo"
            secureTextEntry
            placeholderTextColor="#6b3f3f"
          />
          <Link href={"/"}>
            <Text style={styles.footerLink}>
              Tem uma conta? Volta ao inicio.
            </Text>
          </Link>
          <Button label="Cadastra-se"></Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#0a0608",
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#0a0608",
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 52,
    gap: 12,
  },
  ilustration: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 48,
    marginBottom: 12,
  },
  footerLink: {
    color: "#c0392b",
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
    fontStyle: "italic",
  },
});
