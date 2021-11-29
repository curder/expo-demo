import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import TweetScreen from "./screens/TweetScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
                <Stack.Screen name={'New Tweet'} component={NewTweetScreen}/>
                <Stack.Screen name={'TweetScreen'} component={TweetScreen}/>
                <Stack.Screen name={'ProfileScreen'} component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
