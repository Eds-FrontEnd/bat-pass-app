import React from 'react';
import { View, TextInput, TextInputProps, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/InputStyles';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showToggleVisibility?: boolean;
  onToggleVisibility?: () => void;
  isVisible?: boolean;
  keyboardType?: TextInputProps['keyboardType']; 
}

export function Input({
  value,
  onChangeText,
  secureTextEntry,
  showToggleVisibility = false,
  onToggleVisibility,
  isVisible,
  keyboardType,
  ...rest
}: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}  // repassa a prop
        {...rest}
      />
      {showToggleVisibility && onToggleVisibility && (
        <Pressable onPress={onToggleVisibility} style={styles.icon}>
          <MaterialCommunityIcons
            name={isVisible ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="#555"
          />
        </Pressable>
      )}
    </View>
  );
}
