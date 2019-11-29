import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Bem-Vindo ao LEVe!</Header>

    <Paragraph>
      Vamos começar a espalhar o amor?
    </Paragraph>
    
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Entrar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Cadastre-se
    </Button>
  </Background>
);

export default memo(HomeScreen);
