import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { logoutUser } from "../../api/auth-api";

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

export default function Tabs({navigation}) {
  return (
    <Container>
      <TabsContainer>
        <TouchableOpacity onPress={() => navigation.navigate("SendMessage")}>
          <TabItem>
            <Icon name="send" size={24} color="#FFF" />
            <TabText>Enviar Mensagem</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AllMessages")}>
          <TabItem>
            <Icon name="list" size={24} color="#FFF" />
            <TabText>Mensagens Recebidas</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
          <TabItem>
            <Icon name="person" size={24} color="#FFF" />
            <TabText>Junte-se a Causa!</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logoutUser()}>
          <TabItem>
            <Icon name="close" size={24} color="#FFF" />
            <TabText>Sair</TabText>
          </TabItem>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}
