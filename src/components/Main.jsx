import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import RepoList from './RepositoryList'

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepoList />
    </View>
  )
}

export default Main
