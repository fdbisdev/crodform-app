import React from 'react';
import { Text } from 'react-native';
import styles from './stytles';
import { ITitle } from '@utils';

const Title = ({ children, style }: ITitle) => {
    return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;