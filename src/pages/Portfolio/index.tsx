import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../../../src/globals/styles';

const Portfolio: React.FC = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Portfolio</Text>
        </View>
    )
}

export default Portfolio;