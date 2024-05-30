import MovieList from "@/components/MovieList";
import TopRated from "@/components/TopRated";
import TrendingMovies from "@/components/TrendingMovies";

import { useState } from "react";
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

export default function Index() {
  const [trending, setTrending] = useState([1,2,3,4,5,6,7,8,9])
  const [upComing, setUpComing] = useState([1,2,3,4,5,6,7,8,9])
  const [topRated, setTopRated] = useState([1,2,3,4,5,6,7,8,9])
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mt-7">
        <StatusBar style="auto" />

        <View className="justify-between mx-4 flex-row items-center">
          <Bars3CenterLeftIcon color={"white"} strokeWidth={2} size={30} />
          <Text className=" text-white font-bold text-3xl"><Text className=" text-yellow-500 font-bold text-3xl">M</Text>
            ovies</Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon color={"white"} strokeWidth={2} size={30} />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }} overScrollMode="never">
        <TrendingMovies data={trending} />
        <MovieList data={upComing} title={"UpComing"}/>
        <TopRated data={topRated}/> 
      </ScrollView>


    </View>
  );
}
