import { StyleSheet, Text, View } from "react-native";

interface CustomerTopBarProps{
  user: string
}

export default function UserTopBar({user}: CustomerTopBarProps) {
  return (
    <View style={topBar_Styles.textContainer}>
      <Text style={topBar_Styles.defaultText}>Bienvenido, </Text>
      <Text style={{fontSize: 25}}>{user}</Text>
    </View>
  );
}

const topBar_Styles = StyleSheet.create({
  textContainer:{
    flexDirection: "row",
  },
  defaultText:{
    color: "#3061b2",
    fontSize: 25
  }
})