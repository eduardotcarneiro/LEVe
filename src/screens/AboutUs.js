import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { theme } from "../core/theme";
import Paragraph from "../components/Paragraph";

const AboutUs = ({ navigation }) => {
  
  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Dashboard")} />

      <Header>Nossa Causa</Header>

      <Paragraph>
        Se você pudesse, em meio a um mundo tão caótico, individualista e egoísta, fazer pequenas ações para aliviar toda essa pressão, você faria?
      </Paragraph>
      <Paragraph>
        Por vezes, temos vontade de ajudar alguém, mas a vida tão corrida acaba nos fazendo priorizar o nosso lado, e acabamos deixando de lado aquele sorriso ou aquela mensagem de força e elogio que poderia mudar o curso do dia de alguém. Mas nós só podemos dar algo que temos, certo? Mas como oferecer sem ter para dar?
      </Paragraph>
      <Paragraph>
        Pensando nisso, criamos o LEV.e, um aplicativo que nos ajudará a espalhar o amor, independente de gênero, etnia, crença ou escolha política, afinal somos todos parte de um mesmo grupo: a humanidade. 
      </Paragraph>

      
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

export default memo(AboutUs);
