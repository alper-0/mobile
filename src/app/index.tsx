import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");

  function HandleSignIn() {
    console.log(email);
    Alert.alert("ERROR", "ERROR");
  }
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
            source={require("@/assets/madara.png")}
            style={styles.ilustration}
          />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha.
          </Text>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            placeholderTextColor="#6b3f3f"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#6b3f3f"
          />
          <Link href={"/signup"}>
            <Text style={styles.footerLink}>
              Não tem uma conta? Cadastre-se aqui.
            </Text>
          </Link>
          <Button label="Entrar" onPress={HandleSignIn} />
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
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#c0392b",
  },
  subtitle: {
    fontSize: 16,
    color: "#c0392b",
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
