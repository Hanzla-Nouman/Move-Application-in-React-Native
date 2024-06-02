import Loading from "@/components/Loading";
import MovieList from "@/components/MovieList";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
const movieName = "The titanic: The Rouge 2018 lorem Ipsum";

var { width, height } = Dimensions.get("window");

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1,2,3,4,5]);
  const [loading, setLoading] = useState(false)

  return (
    <View className="flex-1 bg-neutral-900">
      {loading?(<Loading/>):( <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        overScrollMode="never"
      >
        <SafeAreaView className="flex-row  justify-between items-center px-4 w-full z-20 mt-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mt-6 bg-slate-400 rounded-xl p-1"
          >
            <ChevronLeftIcon color={"white"} strokeWidth={2.5} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
            className="mt-6 px-3"
          >
            <HeartIcon color={isFavourite ? "red" : "white"} size={40} />
          </TouchableOpacity>
        </SafeAreaView>

        <View
          className="justify-center flex-row mt-3"
          style={{
            elevation: 3,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 40,
          }}
        >
          <View className=" justify-center items-center rounded-full overflow-hidden h-80 w-80 border border-neutral-400">
            <Image
              style={{ width: width * 0.74, height: height * 0.43 }}
              source={require("../assets/images/pic1.jpg")}
            />
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-3xl text-center text-white font-bold">
            Tom Cruise
          </Text>
          <Text className="text-base text-center text-neutral-500">
            London,United Kingdom
          </Text>
        </View>
        <View className="mx-3 p-3 mt-6 flex-row justify-between items-center  bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-300 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300  text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-300 px-2 items-center">
            <Text className="text-white font-semibold">Bithday</Text>
            <Text className="text-neutral-300  text-sm">1979-08-03</Text>
          </View>
          <View className="border-r-2 border-r-neutral-300 px-2 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300  text-sm">Acting</Text>
          </View>
          <View className="px-1 pr-1 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300  text-sm">64.34</Text>
          </View>
        </View>
        <View className="mt-4 mx-4 space-y-2">
<Text className="text-white text-lg">Biography</Text>
<Text className="text-neutral-400 tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti natus deserunt quam laboriosam error! Accusamus assumenda reprehenderit veniam laudantium, expedita placeat esse! Placeat fugiat architecto quae corporis ducimus eveniet quidem a at? Minima qui saepe hic amet beatae nulla fuga similique corrupti delectus illo velit laudantium quos numquam, aliquid dolorem modi nihil ad sed in.</Text>
        </View>
        <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/>
      </ScrollView>)}
     
    </View>
  );
};

export default PersonScreen;
