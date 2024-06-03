import React from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View,TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '@/api/movieDb'
const TopRated = ({ data }) => {
  const navigation = useNavigation()
  var { width, height } = Dimensions.get('window')
  const movieName = "The titanic: The Rouge 2018"

  return (
    <View className="">
      <View className="justify-between flex-row mt-4 items-baseline mb-3">
        <Text className="text-white  mx-6 text-lg font-semibold">Top Rated</Text>
        <TouchableOpacity ><Text className="text-yellow-500 mx-6 text-sm">See all</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode='never' contentContainerStyle={{paddingHorizontal:15}}>

        {data && data.map((item, index) => {
          return (<TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item)} >
            <View className="space-y-1 mr-6 ">
            <Image
              source={{uri: image185(item.poster_path)}}
              // resizeMode="contain"
              style={{ width: width * 0.38, height: height * 0.25
               }}
              className="rounded-3xl"
            />
            <Text className="text-neutral-300  text-sm   ">
              {/* {item.title} */}
              {item.title && item.title.length>15? item.title.slice(0,15)+'...':item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>)
        })}
      </ScrollView>
    </View>
  )
}

export default TopRated