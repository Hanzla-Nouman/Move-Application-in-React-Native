
import { image185 } from "@/api/movieDb";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";

const Cast = ({ data,navigation }) => {
// console.log(data)
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
                <Image source={{uri: image185(item?.profile_path)}} className="rounded-2xl h-24 w-24"/>
                </View>
                <Text className="text-neutral-400 mt-2 font-bold text-xs tracking-wider">
                               {item?.character.length > 10 ? item?.character.slice(0,10)+'...': item?.character}

                </Text>
                <Text className="text-neutral-400 font-bold text-xs  tracking-wider">
                  {item?.original_name.length > 10 ? item?.original_name.slice(0,10)+'...': item?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};

export default Cast;
