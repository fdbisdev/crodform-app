import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import {
    Sintony_400Regular as SintonyRegular,
    Sintony_700Bold as SintonyBold,
    useFonts,
} from '@expo-google-fonts/sintony'
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        SintonyRegular,
        SintonyBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar style="auto" />
            <Provider store={store}>
                <Routes />
            </Provider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
