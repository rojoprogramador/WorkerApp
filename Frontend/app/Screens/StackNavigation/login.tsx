import { Images } from "@/app/utils/images";
import PasswordInput from "@/components/ui/passwordInput";
import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={LoginScreenStyles.container}>
        <View>
          <Image
            source={Images.favicon}
            style={LoginScreenStyles.image}
            resizeMode="contain"
          />
        </View>
        <View style={LoginScreenStyles.formContainer}>
          <TextInput style={LoginScreenStyles.generalInput} />
          <PasswordInput />
        </View>
      </View>
    </SafeAreaView>
  );
}

const LoginScreenStyles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
  },
  formContainer: {
    width: "100%",
    height: 200,
    marginTop: 20,
    flex: 1,
    alignItems: "center",
  },
  generalInput: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#407ee3",
    borderWidth: 1,
    paddingLeft: 10,
  },
});
