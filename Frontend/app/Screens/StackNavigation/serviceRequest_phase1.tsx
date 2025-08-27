import { StyleSheet, Text, View } from "react-native";

export default function ServReq_PhaseOne() {
  return (
    <View style={containerStyles.container}>
      <Text>Primera fase del proceso de solicitud de servicio.</Text>
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