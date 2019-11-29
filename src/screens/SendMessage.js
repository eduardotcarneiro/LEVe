import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import Button from "../components/Button";
import Toast from "../components/Toast";

const SendMessage = ({ navigation }) => {
  const [toast, setToast] = useState({ value: "", type: "" });
  const [loading, setLoading] = useState(false);

  const _onSendPressed = async () => {
    setToast({
        type: "success",
        value: "Sua mensagem foi enviada! Obrigado. "
      });
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Dashboard")} />

      <Header>Hora de Espalhar o Amor</Header>

      <TextInput
      style={{
        height: 200,
        width: 300,}}
        maxLength={100}
        numberOfLines = {6}
        multiline={true}
        label="Insira aqui sua mensagem"
        returnKeyType="done"
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSendPressed}
        style={styles.button}
      >
        Enviar
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.label}>← Voltar à Entrada</Text>
      </TouchableOpacity>

      <Toast
        type={toast.type}
        message={toast.value}
        onDismiss={() => setToast({ value: "", type: "" })}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12
  },
  button: {
    marginTop: 12
  },
  label: {
    color: theme.colors.secondary,
    width: "100%"
  }
});

export default memo(SendMessage);
