import { getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "@/api/movieDb";
import Loading from "@/components/Loading";
import MovieList from "@/components/MovieList";
import TopRated from "@/components/TopRated";
import TrendingMovies from "@/components/TrendingMovies";
import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

export default function Index() {
  const [trending, setTrending] = useState([])
  const [upComing, setUpComing] = useState([1,2,3,4,5,6,7,8,9])
  const [topRated, setTopRated] = useState([1,2,3,4,5,6,7,8,9])
  const [loading, setLoading] = useState(false) 
  const navigation = useNavigation()
  useEffect(()=>{
     fetchTrendingMovies()
     fetchUpComingMovies()
     fetchTopRatedMovies()
  },[])
  const fetchTrendingMovies= async()=>{
    setLoading(true)
      const response = await getTrendingMovies() 
      // console.log("Fetching data",response.data.results.length)
      {response&& response.data && response.data.results.length>0 && setTrending(response.data.results)}
      setLoading(false)
  }
  const fetchUpComingMovies= async()=>{
    setLoading(true)
      const response = await getUpcomingMovies() 
      // console.log("Fetching data",response.data.results.length)
      {response&& response.data && response.data.results.length>0 && setUpComing(response.data.results)}
      setLoading(false)
  }
  const fetchTopRatedMovies= async()=>{
    setLoading(true)
      const response = await getTopRatedMovies() 
      // console.log("Fetching data",response.data.results.length)
      {response&& response.data && response.data.results.length>0 && setTopRated(response.data.results)}
      setLoading(false)
  }
  return ( 
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView className="mt-7">
        <StatusBar backgroundColor={"white"} />

        <View className="justify-between mx-4 flex-row items-center">
          <Bars3CenterLeftIcon color={"white"} strokeWidth={2} size={30} />
          <Text className=" text-white font-bold text-3xl"><Text className=" text-yellow-500 font-bold text-3xl">M</Text>
            ovies</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
            <MagnifyingGlassIcon color={"white"} strokeWidth={2} size={30} />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      
{loading?(<Loading/>):( <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }} overScrollMode="never">
       {trending.length>0 && <TrendingMovies data={trending} />}
        <MovieList data={upComing} title={"UpComing"}/>
        <TopRated data={topRated}/> 
      </ScrollView>)}
     


    </View>
  );
}
