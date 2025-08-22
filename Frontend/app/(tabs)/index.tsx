import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const bgImage = require("../../assets/images/favicon.png");

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={bgImage}
        style={containerStyles.backgroundImage}
        resizeMode="contain"
      />
      <View style={containerStyles.container}>
        <Text style={containerStyles.text}>Vista principal del Home</Text>
      </View>
    </SafeAreaView>
  );
}

const containerStyles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2, // <-- aquí bajas la opacidad SOLO de la imagen
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
