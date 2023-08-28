import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { colors } from '@utils';
import { GainIcon, LossIcon } from '../../../assets/icons';

interface IGainIndicator {
    gain: string;
    positiveGain?: boolean;
    absoluteGain?: string;
}

function GainIndicator({
    gain,
    positiveGain = false,
    absoluteGain,
}: IGainIndicator) {
    const gainColor = positiveGain ? colors.statusGreen : colors.statusRed;

    return (
        <View style={styles.container}>
            {positiveGain ? <GainIcon color="" /> : <LossIcon color="" />}
            <Text
                style={[
                    styles.gainText,
                    {
                        color: gainColor,
                    },
                ]}>
                {gain}
            </Text>
            {!!absoluteGain && (
                <Text style={[styles.gainText, { color: gainColor }]}>
                    ({absoluteGain})
                </Text>
            )}
        </View>
    );
}

export default GainIndicator;