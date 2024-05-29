import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'

const MovieList = ({data}) => {
  return (
    <ScrollView horizontal>
    <TouchableOpacity  style={{ width: 300, marginHorizontal: -15,flex:1 ,height:400}} >
                <Image
                  source={require('../assets/images/pic1.jpg')}
                  resizeMode="contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </TouchableOpacity>
              </ScrollView>
  )
}

export default MovieList