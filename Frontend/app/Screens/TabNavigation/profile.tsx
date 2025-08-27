import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={containerStyles.container}>
      <Text>Aquí se verán los ajustes e info del perfil</Text>
    </View>
  );
}

const containerStyles = StyleSheet.create({
  container:{
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  }
})