import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import IconSettings from "./IconSettings";
import {Ionicons} from "@expo/vector-icons";

export default function App() {
    const onPress = () => {
        Alert.alert('Touchable opacity pressed')
    }

    const [text, setText] = useState('');
    const [results, setResults] = useState('');

    useEffect(() => {
        fetch('https://www.reddit.com/r/aww.json')
            .then(response => response.json())
            .then(result => {
                setResults(result.data.children);
            });
    }, []);

    const renderRedditItem = ({item}) => {
        return <View style={{marginVertical: 4}}>
            <Text>{item.data.title}</Text>
        </View>
    };

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
                <Text>
                    <IconSettings color={'#007aff'} width={16} height={16}/>
                </Text>
                <Text>Press Here</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>
                    <Ionicons name="settings" size={24} color="black"/>
                </Text>
                <Text>Press Here</Text>
            </TouchableOpacity>

            <Pressable
                onPressIn={() => console.log('pressing in')}
                onPressOut={() => console.log('pressing out')}
                onLongPress={() => console.log('long press')}
                style={styles.button}>
                <Text>Pressable Here</Text>
            </Pressable>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                />

                <Text>{text}</Text>
            </View>

            <View>
                <FlatList style={{marginHorizontal: 20}}
                          data={results}
                          renderItem={renderRedditItem}
                          keyExtractor={item => item.data.id}
                />
            </View>
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
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#ddd",
        padding: 10
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
