import React from 'react'
import { Image, View, StyleSheet, Platform } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepoStats'
import theme from '../theme'

const RepoItemHeader = ({ ownerAvatarUrl, fullName, description, languaje }) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight={'bold'}>{fullName}</StyledText>
        <StyledText color={'secondary'}>{description}</StyledText>
        <StyledText style={styles.languaje} blue>
          {languaje}
        </StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepoItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  languaje: {
    padding: 4,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purple'
    }),
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export default RepositoryItem
