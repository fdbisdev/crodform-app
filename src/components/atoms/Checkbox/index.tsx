import CheckIcon from '@icons';
import { View } from 'react-native';
import { colors } from '@utils';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Checkbox as ExpoCheckBox } from 'expo-checkbox'
import styles from './styles';
import { ICheckbox } from './types';

const Checkbox: React.FC<ICheckbox> = ({
    setChecked,
    isChecked,
    style,
    textComponent,
}: ICheckbox) => {

    return (
        <View style={[style, styles.wrapper]}>
            <ExpoCheckBox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                ImageComponent={CheckIcon}
                color={isChecked ? colors.primary : colors.subtitleGrey}
            />
            {textComponent}
        </View>
    );
}

export default Checkbox;