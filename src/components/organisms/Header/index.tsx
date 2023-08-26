import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { PressableIcon } from '@molecules';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IHeader } from '@utils';

const Header: React.FC<IHeader> = ({ canGoBack, title, subtitle }: IHeader) => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleGoBack = () => {
        if (!navigation.canGoBack()) return;

        navigation.goBack();
    };

    return (
        <View style={[styles.container,
        {
            paddingTop: top,
            height: top + 60
        }
        ]}>
            {
                canGoBack && (
                    <PressableIcon />
                )
            }
            {
                title && (
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        {!!subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
                    </View>
                )
            }
        </View>
    )
}

export default Header;