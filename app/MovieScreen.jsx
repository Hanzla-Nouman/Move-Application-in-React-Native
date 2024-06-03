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
import { LinearGradient } from "expo-linear-gradient";
import Cast from "@/components/Cast";
import MovieList from "@/components/MovieList";
import Loading from "@/components/Loading";
import { getMovieCredits, getMovieDetails, getMovieSimilar } from "@/api/movieDb";
const MovieScreen = () => {
  const navigation = useNavigation();
  const { params: item } = useRoute();
  const [cast, setCast] = useState();
  const [similarMovies, setsimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchMovieDetails(item.id);
    fetchMovieCredits(item.id);
    fetchSimilarMovies(item.id);
    setLoading(true);
  }, [item]);
  const fetchMovieDetails = async (id) => {
    const { data } = await getMovieDetails(id);
    setMovie(data);
    setLoading(false);
  };
  const fetchMovieCredits = async (id) => {
    const { data } = await getMovieCredits(id);
    setCast(data.cast);
    setLoading(false);
  };
  const fetchSimilarMovies = async (id) => {
    const { data } = await getMovieSimilar(id);
    setsimilarMovies(data.results);
    setLoading(false);
  };
  return (
    <>
      <View className="flex-1 bg-neutral-900">
        {loading ? (
          <Loading />
        ) : (
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            overScrollMode="never"
          >
            <SafeAreaView className="flex-row absolute justify-between items-center px-4 w-full z-20 mt-4">
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
            <View>
              <Image
                style={{ width: width, height: height * 0.55 }}
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + movie?.poster_path,
                }}
              />
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(23, 23, 23,0.8)",
                  "rgba(23, 23, 23,1)",
                ]}
                style={{ width: width, height: height * 0.4 }}
                className="absolute bottom-0"
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
            </View>
            <Text className="text-white text-2xl font-semibold text-center tracking-wider -mt-20 px-4 space-y-3">
              {movie?.title}
            </Text>
            <Text className="text-neutral-300 mt-2 text-base  text-center tracking-wider">
              {movie?.status} • {movie?.release_date.split("-")[0]} •{" "}
              {movie?.runtime} min
            </Text>
            <View className="flex-row justify-center">
              {movie?.genres?.map((gener, index) => {
                let showDot = index + 1 !== movie.genres.length
                return (
                  <Text key={index} className="text-neutral-300 mt-2 text-base mx-1 text-center tracking-wider">
                    {gener?.name} {showDot && "•"}
                  </Text>
                );
              })}
            </View>
            <Text className="text-neutral-400 mt-2 mx-4 tracking-wider">
              {movie?.overview}
            </Text>
            <Cast data={cast} navigation={navigation} />
            <MovieList
              data={similarMovies}
              title={"Similar Movies"}
              hideSeeAll={true}
            />
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default MovieScreen;
