// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{headerShown:false}}/>
//     </Stack>
//   );
// }
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./index";
 const Stack=createNativeStackNavigator()
import MovieList from "@/components/MovieList";
import MovieScreen from "./MovieScreen";
 export default function AppNavigation(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={Index} options={{headerShown:false}} />
                <Stack.Screen name="Movie" component={MovieScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
 }