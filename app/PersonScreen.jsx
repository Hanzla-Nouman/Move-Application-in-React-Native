import { getPersonDetails, getPersonMovieCredits, image342 } from "@/api/movieDb";
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
  const {params:item}= useRoute()
  const [isFavourite, setIsFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true)
useEffect(() => {
  
fetchPersonDetails(item.id)
  fetchPersonMovies(item.id)
  
}, [item])
const fetchPersonDetails = async(id)=>{ 
  const {data} = await getPersonDetails(id)
  setPerson(data)
  setLoading(false)
}
const fetchPersonMovies = async(id)=>{
  const {data} = await getPersonMovieCredits(id)
  if(data && data?.cast) setPersonMovies(data.cast)
  setLoading(false)
}

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
              source={{uri: image342(person?.profile_path)}}
            />
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-3xl text-center text-white font-bold">
           {person?.name}
          </Text>
          <Text className="text-base text-center text-neutral-500">
            {person?.place_of_birth}
          </Text>
        </View>
        <View className="mx-3 p-3 mt-6 flex-row justify-between items-center  bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-300 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300  text-sm">
              {person.gender === 1 ? "Female":"Male"}
            </Text>
          </View>
          <View className="border-r-2 border-r-neutral-300 px-2 items-center">
            <Text className="text-white font-semibold">Bithday</Text>
            <Text className="text-neutral-300  text-sm">{person?.birthday}</Text>
          </View>
          <View className="border-r-2 border-r-neutral-300 px-2 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300  text-sm">{person?.known_for_department}</Text>
          </View>
          <View className="px-1 pr-1 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300  text-sm">{person?.popularity.toFixed(2)}%</Text>
          </View>
        </View>
        <View className="mt-4 mx-4 space-y-2">
<Text className="text-white text-lg">Biography</Text>
<Text className="text-neutral-400 tracking-wide">
  {person?.biography || "N/A"}
  </Text>
        </View>
        <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/>
      </ScrollView>)}
     
    </View>
  );
};

export default PersonScreen;
