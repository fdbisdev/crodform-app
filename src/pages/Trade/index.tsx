import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../../../src/globals/styles';

const Trade: React.FC = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Trade</Text>
        </View>
    )
}

export default Trade;