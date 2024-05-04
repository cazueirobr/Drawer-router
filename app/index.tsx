import { Button, Input } from "@rneui/base";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {

  const redirect = () => {
    router.push("mainArea/main")
  }

  return (
    <View>
      <Input placeholder="Login"></Input>
      <Input placeholder="Senha"></Input>
      <Button title={"Login"} onPress={redirect}></Button>
    </View>
  );
}
