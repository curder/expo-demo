import React, { useEffect, useState } from "react";
import axiosConfig from "../helpers/axiosConfig";
import { Entypo } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, ActivityIndicator } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import axios from "axios";
import { format } from 'date-fns';

export default function TweetScreen({route, navigation}) {
  const [tweet, setTweet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const goToProfile = () => navigation.navigate("Profile Screen");
  const getTweet = () => {
    axiosConfig.get(`/tweets/${route.params.tweetId}`)
      .then(res => {
        setTweet(res.data)
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    return getTweet();
  }, []);


  return (

    <View style={styles.container}>
      {isLoading ? (<ActivityIndicator style={{marginTop: 12,}} size="large" color={"gray"}/>) : (<>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.flexRow} onPress={() => goToProfile()}>
            <Image style={styles.avatar} source={{uri: tweet.user.avatar}}/>
            <View>
              <Text style={styles.tweetName}>{tweet.user.name}</Text>
              <Text style={styles.tweetHandle}>@{tweet.user.username}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="gray"/>
          </TouchableOpacity>
        </View>

        <View style={styles.tweetContentContainer}>
          <Text style={styles.tweetContent}>
            {tweet.body}
          </Text>

          <View style={styles.tweetTimestampContainer}>
            <Text style={styles.tweetTimestampText}>{format(new Date(tweet.created_at), 'h:mm a')}</Text>
            <Text style={styles.tweetTimestampText}>&middot;</Text>
            <Text style={styles.tweetTimestampText}>{format(new Date(tweet.created_at), 'd MMM.yy')}</Text>
            <Text style={styles.tweetTimestampText}>&middot;</Text>
            <Text style={[styles.tweetTimestampText, styles.linkColor]}>Twitter from iPhone</Text>
          </View>
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
            <EvilIcons name={'comment'} size={32} color={'gray'}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <EvilIcons name={'retweet'} size={32} color={'gray'}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <EvilIcons name={'heart'} size={32} color={'gray'}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
                       size={32}
                       color={'gray'}/>
          </TouchableOpacity>
        </View>
      </>)}
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white',
  }, flexRow: {
    flexDirection: 'row'
  }, spaceAround: {
    justifyContent: 'space-around',
  }, ml16: {
    marginLeft: 16,
  }, linkColor: {
    color: '#1d9bf1',
  }, profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
  }, avatar: {
    width: 50, height: 50, marginRight: 8, borderRadius: 25,
  }, tweetName: {
    fontWeight: 'bold', color: '#222',
  }, tweetHandle: {
    color: 'gray', marginTop: 4
  }, tweetContentContainer: {
    paddingHorizontal: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#e5e7eb',
  }, tweetContent: {
    fontSize: 20, lineHeight: 30,
  }, tweetTimestampContainer: {
    flexDirection: "row", marginTop: 12,
  }, tweetTimestampText: {
    color: "gray", marginRight: 6,
  }, tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  }, tweetEngagementNumber: {
    fontWeight: 'bold',
  }, tweetEngagementLabel: {
    color: 'gray', marginLeft: 6,
  },
});
