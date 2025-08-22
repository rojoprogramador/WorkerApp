import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={containerStyles.container}>
      <Text>Aquí se verán los servicios agendados</Text>
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