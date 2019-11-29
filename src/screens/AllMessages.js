import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { theme } from "../core/theme";

const AllMessages = ({ navigation }) => {
  
  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Dashboard")} />

      <Header>Todas as Mensagens</Header>
      
      

      
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.label}>← Voltar à Entrada</Text>
      </TouchableOpacity>
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

export default memo(AllMessages);
