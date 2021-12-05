import React from "react";
import {Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Platform} from "react-native";
import {AntDesign, EvilIcons} from "@expo/vector-icons";

export default function HomeScreen ({ navigation }) {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item',
    },
    {
      id: '6',
      title: 'Sixth Item',
    },
    {
      id: '7',
      title: 'Seventh Item',
    },
    {
      id: '8',
      title: 'Eight Item',
    },
    {
      id: '9',
      title: 'Ninth Item',
    },
    {
      id: '10',
      title: 'Tenth Item',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={ styles.tweetContainer }>
      <TouchableOpacity onPress={ () => goToProfile() }>
        <Image style={ styles.avatar } source={ { uri: 'https://reactnative.dev/img/tiny_logo.png' } }/>
      </TouchableOpacity>
      <View style={ { flex: 1, } }>
        <TouchableOpacity style={ styles.flexRow } onPress={ () => goToSignalTweet() }>
          <Text numberOfLines={ 1 } style={ styles.tweetName }>{ item.title }</Text>
          <Text numberOfLines={ 1 } style={ styles.tweetHandle }>@curder</Text>
          <Text>&middot;</Text>
          <Text numberOfLines={ 1 } style={ styles.tweetHandle }>9m</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.tweetContent } onPress={ () => goToSignalTweet() }>
          <Text style={ styles.tweetContentContainer }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            autem cum doloribus eligendi excepturi inventore itaque iure libero numquam optio placeat porro provident
            ratione, reprehenderit rerum sint sit vel velit!</Text>
        </TouchableOpacity>

        <View style={ styles.tweetEngagement }>
          <TouchableOpacity style={ styles.flexRow }>
            <EvilIcons name={ 'comment' } size={ 22 } style={ { marginRight: 2 } } color={ "gray" }/>
            <Text style={ styles.textGray }>5,456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ [styles.flexRow, styles.ml16] }>
            <EvilIcons name={ 'retweet' } size={ 22 } style={ { marginRight: 2 } } color={ "gray" }/>
            <Text style={ styles.textGray }>456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ [styles.flexRow, styles.ml16] }>
            <EvilIcons name={ 'heart' } size={ 22 } style={ { marginRight: 2 } } color={ "gray" }/>
            <Text style={ styles.textGray }>1,456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ [styles.flexRow, styles.ml16] }>
            <EvilIcons name={ Platform.OS === 'ios' ? 'share-apple' : 'share-google' } size={ 22 }
                       style={ { marginRight: 2 } } color={ "gray" }/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  const goToProfile = () => navigation.navigate("Profile Screen")
  const goToSignalTweet = () => navigation.navigate("Tweet Screen")
  const goToNewTweet = () => navigation.navigate("New Tweet")

  return (
    <View style={ styles.container }>
      <FlatList
        data={ DATA }
        renderItem={ renderItem }
        keyExtractor={ item => item.id }
        ItemSeparatorComponent={ () => <View style={ styles.tweetSeparator }></View> }
      />

      <TouchableOpacity style={styles.floatingButton} onPress={() => goToNewTweet()}>
        <AntDesign name={'plus'} size={24} color={"white"} />
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
