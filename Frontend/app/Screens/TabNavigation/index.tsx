import { Images } from "@/app/utils/images";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

import { ScheduleButton, ServiceButton } from "@/components/indexComponents";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={Images.favicon}
        style={containerStyles.backgroundImage}
        resizeMode="contain"
      />
      <View style={containerStyles.container}>
        <ServiceButton/>
        <ScheduleButton/>
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
