import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import axiosConfig from "../helpers/axiosConfig";
import locale from 'date-fns/locale/en-US';
import { formatDistanceToNowStrict } from 'date-fns';
import formatDistance from "../helpers/formatDistanceCustom";

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isAtEndOfScrolling, setIsAtEndOfScrolling] = useState(false);

  useEffect(() => {
    getAllTweets()
  }, [page])

  let getAllTweets = () => {
    axiosConfig.get(`/tweets?page=${page}`)
      .then(res => {
        if (page === 1) {
          setData(res.data.data)
        } else {
          setData([...data, ...res.data.data])
        }

        if (res.data.next_page_url) {
          setIsAtEndOfScrolling(true)
        } else {
          setIsAtEndOfScrolling(false)
        }

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
    setPage(1)
    setIsAtEndOfScrolling(false)
    setIsRefreshing(true)
    getAllTweets()
  }

  let handleEnd = () => {
    setPage(page + 1)
  }

  const renderItem = ({item: tweet}) => (<View style={styles.tweetContainer}>
    <TouchableOpacity onPress={() => goToProfile()}>
      <Image style={styles.avatar} source={{uri: tweet.user.avatar}}/>
    </TouchableOpacity>
    <View style={{flex: 1,}}>
      <TouchableOpacity style={styles.flexRow} onPress={() => goToSignalTweet(tweet.id)}>
        <Text numberOfLines={1} style={styles.tweetName}>{tweet.user.name}</Text>
        <Text numberOfLines={1} style={styles.tweetHandle}>@{tweet.user.username}</Text>
        <Text>&middot;</Text>
        <Text numberOfLines={1}
              style={styles.tweetHandle}>
          {formatDistanceToNowStrict(new Date(tweet.created_at), {
            locale: {
              ...locale,
              formatDistance,
            },
          })}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tweetContent} onPress={() => goToSignalTweet(tweet.id)}>
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
  </View>)

  const goToProfile = () => navigation.navigate("Profile Screen")
  const goToSignalTweet = (tweetId) => navigation.navigate("Tweet Screen", {tweetId})
  const goToNewTweet = () => navigation.navigate("New Tweet")

  return (<View style={styles.container}>
    {isLoading ? (<ActivityIndicator style={{marginTop: 12,}} size="large" color={"gray"}/>) : (<FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      onEndReached={handleEnd}
      onEndReachedThreshold={0}
      ListFooterComponent={() => !isAtEndOfScrolling && (<ActivityIndicator size={"large"} color={"gray"}/>)}
    />)}
    <TouchableOpacity style={styles.floatingButton} onPress={() => goToNewTweet()}>
      <AntDesign name={'plus'} size={24} color={"white"}/>
    </TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "white",
  }, flexRow: {
    flexDirection: "row"
  }, textGray: {
    color: 'gray',
  }, ml16: {
    marginLeft: 16
  }, tweetContainer: {
    flexDirection: "row", paddingHorizontal: 12, paddingVertical: 12,
  }, tweetSeparator: {
    borderBottomWidth: 1, borderBottomColor: "#e5e7eb",
  }, avatar: {
    width: 42, height: 42, marginRight: 8, borderRadius: 21,
  }, tweetName: {
    fontWeight: "bold", color: "#222"
  }, tweetHandle: {
    paddingHorizontal: 8, color: "gray"
  }, tweetContentContainer: {
    marginTop: 8,
  }, tweetContent: {
    lineHeight: 20,
  }, tweetEngagement: {
    flexDirection: "row", alignItems: "center", marginTop: 12,
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
