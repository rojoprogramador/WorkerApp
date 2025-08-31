import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { Pressable, StyleSheet, Text } from "react-native";


export function ServiceButton() {

  const navigation = useNavigation()

  function goService(){
    navigation.navigate('ServRequest_P1')
  }

  return (
    <Pressable style={[globalStyles.buttons, serviceButtonStyles.container]} onPress={goService}>
      <Text style={serviceButtonStyles.buttonText}>¿Cómo podemos ayudarte el día de hoy?</Text>
    </Pressable>
  );
}

export function ScheduleButton() {
  return (
    <Pressable style={[globalStyles.buttons, ScheduleButtonStyles.container]}>
      <Text style={ScheduleButtonStyles.buttonText}>Agendar servicio</Text>
      <Ionicons size={28} name="calendar-number" color={"#000"} />
    </Pressable>
  );
}

const globalStyles = StyleSheet.create({
    buttons:{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10
    }
})

const serviceButtonStyles = StyleSheet.create({
    container:{
        backgroundColor: "#407ee3"
    },
    buttonText:{
        fontSize: 17,
        color: "#fff"
    }
})

const ScheduleButtonStyles = StyleSheet.create({
    container:{
        width: "100%",
        height: 50,
        backgroundColor: "#f2c70f",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText:{
        fontSize: 17,
        color: "#000",
        margin: 10
    }
})