import React from 'react';
import { Image, Text, View } from 'react-native';
import LogoImg from '../../../assets/bat-logo.png';
import { styles } from './styles/LogoStyles';

export function Logo() {
  return (
    <View>
      <Text style={styles.title}>Bat Pass Generator</Text>
      <Image
        source={LogoImg}
        style={{
          resizeMode: 'contain',
          height: 180,
        }}
      />
    </View>
  );
}