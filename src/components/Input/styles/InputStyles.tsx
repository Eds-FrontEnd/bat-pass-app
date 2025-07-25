import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E5BF3C',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8, 
    height: 44, 
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 8, 
  },
  icon: {
    marginLeft: 8,
  },
});
