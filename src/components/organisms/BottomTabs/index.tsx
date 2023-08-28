import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { colors } from '@utils';

type Props = BottomTabBarProps;

const BottomTabs = ({ state, descriptors, navigation }: Props) => {
    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    typeof options.tabBarLabel === 'string'
                        ? options.tabBarLabel
                        : options.title ?? route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={styles.button}
                        onPress={onPress}>
                        {!!options.tabBarIcon &&
                            options.tabBarIcon({
                                focused: isFocused,
                                color: 'black',
                                size: 24,
                            })}
                        <Text
                            style={[
                                styles.label,
                                {
                                    color: isFocused ? colors.primary : 'black',
                                },
                            ]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </SafeAreaView>
    );
}

export default BottomTabs;