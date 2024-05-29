import React from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieList from './MovieList';
const TrendingMovies = ({ data }) => {
  const width = Dimensions.get('window').width;

  const handleClick = () => {
    console.log("clicked");
    navigation.navigate('Movie',item)
  }

  return (
    <View className="mt-4">
      <Text className="text-white -mb-4 mx-6 text-lg font-semibold">Trending</Text>
      <View className="justify-center items-center">
        <ScrollView
          horizontal
          className="mt-6"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          overScrollMode={"never"} // Disables overscroll effect on Android
          style={{ height: 370 }}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={{ width: 300, marginHorizontal: -15 }} onPress={handleClick}>
                <Image
                  source={require('../assets/images/pic1.jpg')}
                  resizeMode="contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </TouchableOpacity>
             
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default TrendingMovies;
