import React from 'react';

import {
  Container, Logo, Top, Title,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
      <Logo source={logo} />
        <Title>LEV.e</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#8B10AE" />
    </Container>
  );
}
