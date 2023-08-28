import React, { useEffect, useMemo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Register, Home } from '@pages';
import { ACCESS_TOKEN_KEY, RootParamList } from '@utils';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import storage from '../services/storage/index';
import { logIn } from '../redux/slices/user';

const Stack = createNativeStackNavigator<RootParamList>();


const Routes: React.FC = () => {
    const { isLoggedIn } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const checkForToken = async () => {
            const token = await storage.get(ACCESS_TOKEN_KEY);

            if (token) {
                dispatch(logIn({ email: 'email@email.com', password: '12345678' }));
            }
        };

        checkForToken();
    }, [dispatch]);

    const newRoutes = useMemo(
        () =>
            isLoggedIn ?
                (
                    <Stack.Screen name="Home" component={Home} />
                )
                :
                (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>
                ), [isLoggedIn])


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