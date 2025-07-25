import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#4D4D4D"
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
});
