import { View } from 'react-native';
import { colors } from '@utils';
import React from 'react';
import { Checkbox as ExpoCheckBox } from 'expo-checkbox'
import styles from './styles';
import { ICheckbox } from '@utils';

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
                color={isChecked ? colors.primary : colors.subtitleGrey}
            />
            {textComponent}
        </View>
    );
}

export default Checkbox;