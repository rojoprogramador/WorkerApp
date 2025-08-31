import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export default function PasswordInput() {
  return (
    <View style={PasswordInputStyles.container}>
        <TextInput keyboardType='visible-password' secureTextEntry={true} style={PasswordInputStyles.generalInput}/>
        <Pressable style={PasswordInputStyles.show_hideBtn}><Entypo name="eye" size={24} color="black" /></Pressable>
    </View>
  );
}

const PasswordInputStyles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderColor: "#407ee3",
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20
  },
  generalInput: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    paddingLeft: 10
  },
  show_hideBtn:{
    width: "10%"
  }
});