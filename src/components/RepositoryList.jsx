import React from 'react'
import { Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js'
import RepositoryItem from './RepositoryItem.jsx'

const RepoList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  )
}

export default RepoList
