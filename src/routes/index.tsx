import React, { useMemo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Register } from '@pages';
import { RootParamList } from '@utils';

const Stack = createNativeStackNavigator<RootParamList>();


const Routes: React.FC = () => {
    const isLoggedIn = false;

    const newRoutes = useMemo(
        () =>
            isLoggedIn ?
                (
                    <Stack.Screen name="Login" component={Login} />
                )
                :
                (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>
                ), [])


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
            >
                {newRoutes}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;