import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import axios from "axios";
import dayjs from 'dayjs';
import '../helpers/formatCustomLocale.js';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getAllTweets()
  }, [])

  let getAllTweets = () => {
    axios.get('https://5e1c-222-128-100-27.ngrok.io/api/tweets')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
        setIsRefreshing(false)
      })
      .catch(e => {
        console.log(e)
        setIsLoading(false)
        setIsRefreshing(false)
      });
  }

  let handleRefresh = () => {
    setIsRefreshing(true)
    getAllTweets();
  }

  const renderItem = ({item: tweet}) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={() => goToProfile()}>
        <Image style={styles.avatar} source={{uri: tweet.user.avatar}}/>
      </TouchableOpacity>
      <View style={{flex: 1,}}>
        <TouchableOpacity style={styles.flexRow} onPress={() => goToSignalTweet()}>
          <Text numberOfLines={1} style={styles.tweetName}>{tweet.user.name}</Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>@{tweet.user.username}</Text>
          <Text>&middot;</Text>
          <Text numberOfLines={1}
                style={styles.tweetHandle}>{dayjs(tweet.created_at).locale('custom-locale').toNow()}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tweetContent} onPress={() => goToSignalTweet()}>
          <Text style={styles.tweetContentContainer}>{tweet.body}</Text>
        </TouchableOpacity>

        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons name={'comment'} size={22} style={{marginRight: 2}} color={"gray"}/>
            <Text style={styles.textGray}>5,456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml16]}>
            <EvilIcons name={'retweet'} size={22} style={{marginRight: 2}} color={"gray"}/>
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml16]}>
            <EvilIcons name={'heart'} size={22} style={{marginRight: 2}} color={"gray"}/>
            <Text style={styles.textGray}>1,456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml16]}>
            <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={22}
                       style={{marginRight: 2}} color={"gray"}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  const goToProfile = () => navigation.navigate("Profile Screen")
  const goToSignalTweet = () => navigation.navigate("Tweet Screen")
  const goToNewTweet = () => navigation.navigate("New Tweet")

  return (
    <View style={styles.container}>
      {isLoading
        ? (<ActivityIndicator style={{marginTop: 12,}} size="large" color={"gray"}/>)
        : (<FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />)
      }
      <TouchableOpacity style={styles.floatingButton} onPress={() => goToNewTweet()}>
        <AntDesign name={'plus'} size={24} color={"white"}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row"
  },
  textGray: {
    color: 'gray',
  },
  ml16: {
    marginLeft: 16
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222"
  },
  tweetHandle: {
    paddingHorizontal: 8,
    color: "gray"
  },
  tweetContentContainer: {
    marginTop: 8,
  },
  tweetContent: {
    lineHeight: 20,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d9bf1",
    position: "absolute",
    bottom: 20,
    right: 12,
  },
})
