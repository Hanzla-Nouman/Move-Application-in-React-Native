import Loading from '@/components/Loading'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'
const {width, height} = Dimensions.get('window')
const SearchScreen = () => {
    const movieName = "Mission Impossible: Rogue Nation 2017"
    const [results,setResults]=useState([])
    const navigation = useNavigation()
  const [loading, setLoading] = useState(false);

  return (<View className="flex-1 bg-neutral-900">
    <SafeAreaView>
        <View className="mx-4 mt-8 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
    <TextInput placeholder='Search Movie' placeholderTextColor={'gray'} className="p-2 pl-5 flex-1 font-semibold text-white tracking-wider"/>
    <TouchableOpacity className="rounded-full bg-neutral-500 p-3 m-1" onPress={()=>navigation.navigate("Index")}>
        <XMarkIcon size={25} strokeWidth={2} color={"white"}/>
    </TouchableOpacity>
    </View>
    {loading?(<Loading/>):(results.length>0?(
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:15}} overScrollMode="never"className="space-y-3 mx-4">
        <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
<View className="flex-row justify-between flex-wrap">
    {results.map((item,index)=>{
        return(
            <TouchableWithoutFeedback key={index} onPress={()=>navigation.push("Movie",item)}>
                <View className="space-y-1 mb-4 ">
                    <Image source={require('../assets/images/pic1.jpg')} className="rounded-2xl" style={{width:width*0.44,height:height*0.3}} />
                    <Text className="text-neutral-300 ml-1 font-semibold">{movieName.length>20? movieName.slice(0,20)+'...':movieName}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    })}
</View>
    </ScrollView>):(
        <View className="justify-center items-center mt-9 mx-4 w-96 overflow-auto">
    <Image className="border border-blue-200 w-96 "source={require('../assets/images/search.png')}/>
    </View>
    ))}
   
    
    </SafeAreaView>
    </View>
  )
}

export default SearchScreen