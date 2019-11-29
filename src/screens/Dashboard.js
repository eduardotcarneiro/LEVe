import React, { memo } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Tabs from '../components/Tabs';

const Dashboard = ({ navigation }) => (
  <Container>
      <Header />
      <Content>
        <Card>
        <CardHeader>
          <TouchableOpacity>
            <Icon name="favorite" size={28} color="#EEE" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="block" size={28} color="#BBB" />
          </TouchableOpacity>
        </CardHeader>
        <CardContent>
          <Title>Você é incrível! Não deixe que ninguém te diga o contrário... Seja Feliz!</Title>
          <Description>Última mensagem recebida</Description>
        </CardContent>
        <CardFooter>
          <Content>
            <Annotation>
            Gostou dessa mensagem? Então compartilhe com seus amigos!
            </Annotation>
          </Content>
          <TouchableOpacity>
            <Icon name="share" size={28} color="#EEE" />
          </TouchableOpacity>
        </CardFooter>
        </Card>
      </Content>
      <Tabs navigation={navigation} />
    </Container>
  );

 /*<Background>
    <Logo />
    <Header>Bem-Vindo ao LEVe!</Header>
    <Paragraph>
      Vamos começar?
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Sair
    </Button>
  </Background>*/

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #FFF;
`;

const Container = styled.View`
  flex: 1;
  background: #FFF;
  justify-content: center;
`;

const Content = styled.View`
  flex: 1;
  max-height: 400px;
`;

const Card = styled(Animated.View)`
  flex: 1;
  background: #8B10AE;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

const Description = styled.Text`
  font-size: 13px;
  color: #EEE;
  textAlign: center;
  margin-top: 5px;
`;

const Title = styled.Text`
  font-size: 26px;
  margin-top: 10px;
  color: #FFF;
  textAlign: center;
`;

const CardFooter = styled.View`
  padding: 30px;
  background: rgba(255, 255, 255, 0.2)
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Annotation = styled.Text`
  font-size: 12px;
  color: #EEE;

`;

export default memo(Dashboard);
