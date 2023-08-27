import { IPressIcon, colors } from '@utils';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const PressableIcon: React.FC<IPressIcon> = ({
    Icon,
    color = colors.primary,
    accentColor = colors.pressedPrimary,
    size = 42,
    subtitle,
    subtitleStyle,
    containerStyle,
    ...props
}: IPressIcon) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Pressable {...props}>
                {({ pressed }) => (
                    <Icon
                        focused={pressed}
                        color={color}
                        accentColor={accentColor}
                        size={size}
                    />
                )}
            </Pressable>
            {!!subtitle && (
                <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
            )}
        </View>
    )
}

export default PressableIcon;