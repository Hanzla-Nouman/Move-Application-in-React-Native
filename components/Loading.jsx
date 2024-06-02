import React from 'react'
import { Dimensions, View } from 'react-native'
import * as Progress from "react-native-progress"

const Loading = () => {
    const {width, height} = Dimensions.get('window')
  return (
     <View style={{height,width}} className="absolute justify-center items-center ">
         <Progress.CircleSnail thickness={12 } size={160} color={"#fca903"}/>
     </View>
  )
}

export default Loading