import React from "react";
import {Entypo} from '@expo/vector-icons';
import {Text, View, StyleSheet, TouchableOpacity, Image, Platform} from "react-native";
import {EvilIcons} from "@expo/vector-icons";

export default function TweetScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.flexRow}>
                    <Image style={styles.avatar} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                    <View>
                        <Text style={styles.tweetName}>Curder L</Text>
                        <Text style={styles.tweetHandle}>@curder</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray"/>
                </TouchableOpacity>
            </View>

            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                    As trendy as it is these days, not every app has to use emoji for all icons 😳 -- maybe you want to
                    pull in a popular set through an icon font like FontAwesome, Glyphicons or Ionicons, or you just use
                    some PNGs that you carefully picked out on The Noun Project. Let's look at how to do both of these
                    approaches.
                </Text>
            </View>

            <View style={styles.tweetEngagement}>
                <View style={styles.flexRow}>
                    <Text style={styles.tweetEngagementNumber}>251</Text>
                    <Text style={styles.tweetEngagementLabel}>Retweet</Text>
                </View>

                <View style={[styles.flexRow, styles.ml16]}>
                    <Text style={styles.tweetEngagementNumber}>21</Text>
                    <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
                </View>

                <View style={[styles.flexRow, styles.ml16]}>
                    <Text style={styles.tweetEngagementNumber}>2,134</Text>
                    <Text style={styles.tweetEngagementLabel}>Likes</Text>
                </View>
            </View>

            <View style={[styles.tweetEngagement, styles.spaceAround]}>
                <TouchableOpacity>
                    <EvilIcons name={'comment'} size={'32'} color={'gray'}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <EvilIcons name={'retweet'} size={'32'} color={'gray'}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <EvilIcons name={'heart'} size={'32'} color={'gray'}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
                               size={'32'}
                               color={'gray'}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flexRow: {
        flexDirection: 'row'
    },
    spaceAround: {
      justifyContent: 'space-around',
    },
    ml16: {
        marginLeft: 16,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25,
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222',
    },
    tweetHandle: {
        color: 'gray',
        marginTop: 4
    },
    tweetContentContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 30,
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    tweetEngagementNumber: {
        fontWeight: 'bold',
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 6,
    },
});