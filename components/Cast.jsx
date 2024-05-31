
import React from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";

const Cast = ({ data,navigation }) => {

  const personName = "Tom Cruise";
  const chracterName = "Ethan Bob James";
  return (
    <>
      <Text className="text-white mt-2 font-bold text-lg mx-4 tracking-wider">
        Top Cast
      </Text>
      <ScrollView
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data &&
          data.map((item, index) => {
            return (
              <TouchableOpacity key={index} className="mx-2 mt-2 items-center" onPress={()=>navigation.navigate('Person',item)}>
                <View className="items-center rounded-full overflow-hidden h-24 w-24 border border-neutral-400">
                <Image source={require('../assets/images/pic1.jpg')} className="rounded-2xl h-24 w-24"/>
                </View>
                <Text className="text-neutral-400 mt-2 font-bold text-xs tracking-wider">
                               {chracterName.length > 10 ? chracterName.slice(0,10)+'...': chracterName}

                </Text>
                <Text className="text-neutral-400 font-bold text-xs  tracking-wider">
                  {personName.length > 10 ? personName.slice(1,10)+'...': personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};

export default Cast;
