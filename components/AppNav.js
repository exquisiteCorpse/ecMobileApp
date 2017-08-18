import React, { Component } from 'react'
import { Platform } from 'react-native'
import AppCamera from './Camera/AppCamera'
import EdgeCamera from './Camera/EdgeCamera'
import UserHome from './User/UserHome'
import UserEdges from './User/UserEdges'
import { Icon } from 'react-native-elements'
import NewCorpse from './Camera/NewCorpse'
import SendToFriends from './Camera/SendToFriends'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import App from './App'

const DrawerIcon = ({ navigate }) => {
  if (Platform.OS === 'ios') {
    return null
  } else {
    return <Icon
      name='bars'
      type='font-awesome'
      color='black'
      style={{ paddingLeft: 20 }}
      onPress={() => navigate('DrawerOpen')} />
  }
}

const WelcomeStack = StackNavigator({
  AppScreen: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />
    })
  }
})

const AddNewCorpseStack = StackNavigator({
  AppCameraScreen: {
    screen: AppCamera,
    navigationOptions: { header: null }
    // navigationOptions: ({ navigation }) => ({
    //   headerLeft: <DrawerIcon {...navigation} />
    // })
  },
  NewCorpseScreen: {
    screen: NewCorpse,
    navigationOptions: { header: null }
  },
  SendToFriendsScreen: {
    screen: SendToFriends
  }
})

const AllCorpsesStack = StackNavigator({
  UserHomeScreen: { screen: UserHome,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />
    })
  }
})

const AllEdgesStack = StackNavigator({
  UserEdgesScreen: { screen: UserEdges,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />
    })
  },
  EdgeCameraScreen: {
    screen: EdgeCamera,
    navigationOptions: { header: null }
    // navigationOptions: ({ navigation }) => ({
    //   headerLeft: <DrawerIcon {...navigation} />
    // })
  }
})

const AppNav = DrawerNavigator({
  Home: { screen: WelcomeStack },
  Camera: { screen: AddNewCorpseStack },
  UserHome: { screen: AllCorpsesStack },
  UserEdges: { screen: AllEdgesStack }
})

export default AppNav
