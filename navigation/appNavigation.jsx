import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "@/app";
 const Stack=createNativeStackNavigator()

 export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={Index} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
 }