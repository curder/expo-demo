import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
    const onPress = () => {
        Alert.alert('Touchable opacity pressed')
    }

    return (
        <View style={styles.container}>
            <Text style={{color: 'red'}}>Open up App.tsx to start working on your app now!</Text>
            <StatusBar style="auto"/>

            <Button
                title="Press me"
                color='green'
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Press Here</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: "#ddd",
        padding: 10
    },
});
