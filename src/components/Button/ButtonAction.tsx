import React, { useState } from "react";
import { Pressable, Text, View, Alert } from "react-native";
import { styles } from "./styles/ButtonStyles";
import { Input } from "../Input/Input";
import generatePass from "../../services/passwordService";
import * as Clipboard from "expo-clipboard";

export function ButtonAction() {
  const [pass, setPass] = useState<string>("");
  const [numberPass, setNumberPass] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  function handleGeneratePassword() {
    const num = Number(numberPass);
    if (isNaN(num) || num < 4 || num > 10) {
      alert("A senha deve ter entre 4 e 10 caracteres.");
      return;
    }

    const generateToken = generatePass({ numberPass: num });
    setPass(generateToken);
  }

  async function handleCopyButton() {
    if (!pass.trim()) {
      Alert.alert("Atenção", "Não há senha para copiar!");
      return;
    }
    await Clipboard.setStringAsync(pass);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <View>
      <Input
        value={pass}
        onChangeText={setPass}
        placeholder="Senha gerada"
        secureTextEntry={!showPass}
        showToggleVisibility
        onToggleVisibility={() => setShowPass((prev) => !prev)}
        isVisible={showPass}
        editable={false}
      />

      <View style={styles.buttonsRow}>
        <Pressable
          style={[styles.button, styles.buttonHalf]}
          onPress={handleGeneratePassword}
        >
          <Text style={styles.text}>⚡ GENERATE</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.buttonHalf]}
          onPress={handleCopyButton}
        >
          <Text style={styles.text}>⚡ {copied ? "Copiado!" : "COPY"}</Text>
        </Pressable>
      </View>

      <Input
        value={numberPass}
        onChangeText={setNumberPass}
        placeholder="Nº de caracteres"
        keyboardType="numeric"
      />
    </View>
  );
}
