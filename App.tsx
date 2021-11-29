import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useFocusEffect} from "@react-navigation/native";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Go to details"
            />
        </View>
    );
}

function DetailsScreen({navigation}) {
    useFocusEffect(React.useCallback(() => {
        console.log("Details screen focused")

        return () => {
            console.log("Details screen unfocused")
        };
    }, []))

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back home"/>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Details" component={DetailsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
