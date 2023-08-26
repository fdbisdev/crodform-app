import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { IHyperLink } from '@utils';


const HyperLink = ({
    children, onPress
}: IHyperLink) => {
    return (
        <Text
            suppressHighlighting={!!onPress}
            onPress={onPress}
            style={styles.link}>
            {children}
        </Text>
    );
}

export default HyperLink;