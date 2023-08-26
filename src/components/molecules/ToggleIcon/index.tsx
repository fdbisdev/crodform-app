import { IFocusableIcon, IIcon, colors } from '@utils';
import React, { ComponentType, memo } from 'react';
import { TouchableOpacity } from 'react-native';

type IToggleIcon = Partial<IIcon> & {
    Icon: ComponentType<IFocusableIcon>;
    state: boolean;
    onToggle: () => void;
};
const ToggleIcon = ({
    Icon,
    state,
    onToggle,
    accentColor = colors.primary,
    color = colors.subtitleGrey,
    size,
}: IToggleIcon) => {

    const onPress = () => {
        onToggle?.();
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon
                focused={state}
                color={color}
                accentColor={accentColor}
                size={size}
            />
        </TouchableOpacity>
    );
}

export default memo(ToggleIcon);