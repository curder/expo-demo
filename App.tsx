import React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, useFocusEffect} from "@react-navigation/native";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                })}
            />
        </View>
    );
}

function DetailsScreen({route}) {
    const {itemId, otherParam} = route.params;

    useFocusEffect(
        React.useCallback(() => {
            console.log("Detail screen is focused");

            return () => {
                console.log("Detail screen is unfocused");
            };
        }, [])
    );
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Screen for {itemId} </Text>
            <Text>{otherParam}</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My Home'}}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
