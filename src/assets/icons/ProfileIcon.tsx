import { IFocusableIcon } from '@utils';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({
    focused,
    color,
    accentColor = 'white',
}: IFocusableIcon) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
                d="M4 22a8 8 0 0116 0h-2a6 6 0 10-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                fill={focused ? accentColor : color}
            />
        </Svg>
    );
}

export default ProfileIcon;