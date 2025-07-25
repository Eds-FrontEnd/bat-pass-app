import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles/MenuStyles';

export function Menu() {
    return (
        <View style={styles.container}>
            <Text>Olá Menu</Text>
        </View>
    );
}