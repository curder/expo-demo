import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Linking, FlatList} from "react-native";
import {EvilIcons} from "@expo/vector-icons";

export default function ProfileScreen () {
  const DATA = [
    {
      id: 1,
      title: "First Item",
    },
    {
      id: 2,
      title: "Two Item",
    },
    {
      id: 3,
      title: "Three Item",
    },
    {
      id: 4,
      title: "Four Item",
    },
    {
      id: 5,
      title: "Five Item",
    },
    {
      id: 6,
      title: "Six Item",
    },
    {
      id: 7,
      title: "Seven Item",
    },
    {
      id: 8,
      title: "Eight Item",
    },
    {
      id: 9,
      title: "Nine Item",
    },
    {
      id: 10,
      title: "Ten Item",
    },
  ];

  const renderItem = ({ item }) => (
    <View>
      <Text style={ { marginVertical: 20 } }>{ item.title }</Text>
    </View>
  )

  const ProfileHeader = () => (
    <View style={ styles.container }>
      <Image style={ styles.backgroundImage }
             source={ { uri: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80" } }/>

      <View style={ styles.avatarContainer }>
        <Image style={ styles.avatar } source={ { uri: "https://reactnative.dev/img/tiny_logo.png" } }/>
        <TouchableOpacity style={ styles.followButton }>
          <Text style={ styles.followButtonText }>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.nameContainer }>
        <Text style={ styles.profileName }>Curder Luo</Text>
        <Text style={ styles.profileHandle }>@curder</Text>
      </View>

      <View style={ styles.profileContainer }>
        <Text style={ styles.profileContainerText }>
          JavaScript, Vue, HTML, CSS, PHP, Laravel, Go, React.js, React Native.
        </Text>
      </View>

      <View style={ styles.locationContainer }>
        <EvilIcons name={ 'location' } size={ 24 } color={ 'gray' }/>
        <Text style={ styles.textGray }>Beijing, China</Text>
      </View>

      <View style={ styles.linkContainer }>
        <TouchableOpacity style={ styles.linkItem } onPress={ () => Linking.openURL("https://www.google.com.hk/") }>
          <EvilIcons name={ "link" } size={ 24 } color={ 'gray' }/>
          <Text style={ styles.linkColor }>Google</Text>
        </TouchableOpacity>
        <View style={ [styles.linkItem, styles.ml16] }>
          <EvilIcons name={ 'calendar' } size={ 24 } color={ 'gray' }/>
          <Text style={ styles.textGray }>Joined March 2017</Text>
        </View>
      </View>

      <View style={ styles.followContainer }>
        <View style={ styles.followItem }>
          <Text style={ styles.followItemNumber }>215</Text>
          <Text style={ styles.followItemLabel }>following</Text>
        </View>
        <View style={ [styles.followItem, styles.ml16] }>
          <Text style={ styles.followItemNumber }>2,555</Text>
          <Text style={ styles.followItemLabel }>followers</Text>
        </View>
      </View>

      <View style={ styles.separator }></View>
    </View>
  )

  return (
    <FlatList data={ DATA }
              style={ styles.container }
              renderItem={ renderItem }
              keyExtractor={ item => item.id }
              ListHeaderComponent={ ProfileHeader }
              ItemSeparatorComponent={ () => (
                <View style={ styles.separator }></View>
              ) }/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textGray: {
    color: "gray",
  },
  ml16: {
    marginLeft: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  backgroundImage: {
    width: 800,
    height: 120,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "white",
    marginTop: -40,
  },
  followButton: {
    backgroundColor: "#0f1418",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  profileHandle: {
    color: "gray",
    marginTop: 1,
  },
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileContainerText: {
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 12,
  },

  linkContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 4,
  },
  linkItem: {
    flexDirection: "row",
  },
  linkColor: {
    color: "#1d9bf1",
  },

  followContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  followItem: {
    flexDirection: "row",
  },
  followItemNumber: {
    fontWeight: "bold",
  },
  followItemLabel: {
    marginLeft: 4
  },
})
