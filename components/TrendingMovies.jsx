import React from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '@/api/movieDb';
const TrendingMovies = ({ data }) => {
  const navigation = useNavigation()

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const handleClick = (item) => {
    
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
          overScrollMode={"never"} // Disables overscroll effect 
          >
          {data.map((ite, index) => {
            return (
              <TouchableOpacity key={index} style={{
                  }} onPress={()=>handleClick(ite)} className="mx-3">
                <Image
                  source={{uri: image500(ite.poster_path)}}
                  style={{ width: width* 0.66, height: height*0.40 }}
                  className="rounded-3xl"
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
