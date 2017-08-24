import React, { Component } from 'react'
import { Platform, Image } from 'react-native'
import AppCamera from './Camera/AppCamera'
import EdgeCamera from './Camera/EdgeCamera'
import NewCorpse from './Camera/NewCorpse'
import SendToFriends from './Camera/SendToFriends'
import Confirmation from './Camera/Confirmation'
import UserHome from './User/UserHome'
import CompleteCorpse from './User/CompleteCorpse'
import UserEdges from './User/UserEdges'
import { Icon } from 'react-native-elements'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import App from './App'

const headerLogo = <Image style={{width: 200, height: 60, alignSelf: 'center', marginRight: 50}} source={require('../public/images/ec-logo.png')} />

const CameraIcon = ({ navigate }) => {
  if (Platform.OS === 'ios') {
    return null
  } else {
    return <Icon
      name='camera'
      type='font-awesome'
      color='black'
      style={{ paddingRight: 20 }}
      onPress={() => navigate('AppCameraScreen')} />
  }
}

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
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        headerTitle: headerLogo,
        title: 'Home',
        headerLeft: <DrawerIcon {...navigation} />
      }
    }
  }
})

const AddNewCorpseStack = StackNavigator({
  UserHomeScreen: { screen: UserHome,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Image style={{width: 200, height: 60, alignSelf: 'center'}} source={require('../public/images/ec-logo.png')} />,
      title: 'Gallery',
      headerLeft: <DrawerIcon {...navigation} />,
      headerRight: <CameraIcon {...navigation} />
    })
  },
  AppCameraScreen: {
    screen: AppCamera,
    navigationOptions: {
      title: 'Start New',
      header: null
    }
  },
  NewCorpseScreen: {
    screen: NewCorpse,
    navigationOptions: { header: null }
  },
  SendToFriendsScreen: {
    screen: SendToFriends,
    navigationOptions: { header: null }
  },
  ConfirmationScreen: {
    screen: Confirmation,
    navigationOptions: { header: null }
  }
})

const AllEdgesStack = StackNavigator({
  UserEdgesScreen: { screen: UserEdges,
    navigationOptions: ({ navigation }) => ({
      headerTitle: headerLogo,
      title: 'Edges',
      headerLeft: <DrawerIcon {...navigation} />
    })
  },
  EdgeCameraScreen: {
    screen: EdgeCamera,
    navigationOptions: { header: null }
  },
  NewCorpseScreen: {
    screen: NewCorpse,
    navigationOptions: { header: null }
  },
  SendToFriendsScreen: {
    screen: SendToFriends,
    navigationOptions: { header: null }
  },
  ConfirmationScreen: {
    screen: Confirmation,
    navigationOptions: { header: null }
  },
  CompleteCorpseScreen: { screen: CompleteCorpse,
    navigationOptions: ({ navigation }) => ({
      headerTitle: headerLogo,
      title: 'Complete',
      header: null
    })
  }
})

const AppNav = DrawerNavigator({
  Home: { screen: WelcomeStack,
    title: 'Home'
  },
  UserHome: { screen: AddNewCorpseStack,
    navigationOptions: {
      title: 'Gallery'
    }
  },
  UserEdges: { screen: AllEdgesStack,
    navigationOptions: {
      title: 'Edges'
    }
  }
})

export default AppNav
