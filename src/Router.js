import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from "./pages/WelcomeScreen";
import MemberSignScreen from "./pages/MemberSignScreen";
import MemberResultScreen from "./pages/MemberResultScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
                <Stack.Screen name="MemberSignScreen" component={MemberSignScreen}/>
                <Stack.Screen name="MemberResultScreen" component={MemberResultScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
