import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = "";

                    if (route.name === 'Home') {
                        iconName = "home"
                    } else if (route.name === 'Settings') {
                        iconName = "settings"
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}>
                <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: 'My Home'}}/>
                <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
