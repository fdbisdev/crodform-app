import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './styles';
import { IButton, colors } from '@utils';

const Button = ({
    label,
    onPress,
    isDisabled,
    style,
    color,
    labelStyle,
    buttonStyle,
}: IButton) => {
    return (
        <TouchableOpacity
            style={[{ width: '90%' }, style]}
            onPress={onPress}
            disabled={isDisabled}>
            <View
                style={[
                    styles.container,
                    { backgroundColor: color ?? colors.primary },
                    buttonStyle,
                ]}>
                <View style={[styles.labelWrapper]}>
                    <Text style={[styles.label, labelStyle]}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Button;