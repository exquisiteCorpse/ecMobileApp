import React, { Component } from 'react'
import { Platform } from 'react-native'
import AppCamera from './Camera/AppCamera'
import EdgeCamera from './Camera/EdgeCamera'
import NewCorpse from './Camera/NewCorpse'
import SendToFriends from './Camera/SendToFriends'
import Confirmation from './Camera/Confirmation'
import UserHome from './User/UserHome'
import UserEdges from './User/UserEdges'
import { Icon } from 'react-native-elements'
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
      title: 'Welcome',
      headerLeft: <DrawerIcon {...navigation} />
    })
  }
})

const AddNewCorpseStack = StackNavigator({
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
  },
  UserEdgesScreen: {
    screen: UserEdges
  }

})

const AllCorpsesStack = StackNavigator({
  UserHomeScreen: { screen: UserHome,
    navigationOptions: ({ navigation }) => ({
      title: 'Gallery',
      headerLeft: <DrawerIcon {...navigation} />
    })
  }
})

const AllEdgesStack = StackNavigator({
  UserEdgesScreen: { screen: UserEdges,
    navigationOptions: ({ navigation }) => ({
      title: 'To Complete',
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
  Home: { screen: WelcomeStack,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Camera: { screen: AddNewCorpseStack,
    navigationOptions: {
      title: 'Add New Corpse'
    }
  },
  UserHome: { screen: AllCorpsesStack,
    navigationOptions: {
      title: 'All Your Corpses'
    }
  },
  UserEdges: { screen: AllEdgesStack,
    navigationOptions: {
      title: 'Unfinished Corpses'
    }
  }
})

export default AppNav
