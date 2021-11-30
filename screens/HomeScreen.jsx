import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen / Feed</Text>
      <Button title={'New Tweet'} onPress={() => {
        navigation.navigate("New Tweet")
      }}/>

      <Button title={'Tweet'} onPress={() => {
        navigation.navigate("TweetScreen")
      }}/>

      <Button title={'Profile'} onPress={() => {
        navigation.navigate("ProfileScreen")
      }}/>
    </View>
  )
}
