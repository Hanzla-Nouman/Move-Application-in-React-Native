import React from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TrendingMovies = ({ data }) => {
  const navigation = useNavigation()

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const handleClick = (i) => {
    console.log("clicked",i);
    navigation.navigate('Movie',i)
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
                  source={require('../assets/images/pic1.jpg')}
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
