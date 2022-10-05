import React from 'react'
import { View } from 'react-native'
import RepoList from './RepositoryList.jsx'
import AppBar from './AppBar'
import { Redirect, Route, Switch } from 'react-router-native'
import Login from '../pages/Login.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepoList />
        </Route>
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  )
}

export default Main
