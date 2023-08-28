import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { userLogout } from '../../../redux/slices/user';
import { GainIndicator } from '@molecules';
import styles from './styles';
import { colors } from '@utils';
import { Subtitle } from '@atoms';
import { PressableIcon } from '@molecules';
import { useAppDispatch } from '../../../redux/hooks';
import { BellIcon, CoinIcon, ProfileIcon } from '../../../assets/icons';

interface IContentHeader {
    balance: string;
    portfolio: string;
    gain: string;
    positiveGain?: boolean;
}

const ContentHeader = ({
    balance,
    portfolio,
    gain,
    positiveGain = false,
}: IContentHeader) => {
    const { top } = useSafeAreaInsets();
    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(userLogout());
    };

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <View style={styles.contentWrapper}>
                <View style={styles.accountInfo}>
                    <PressableIcon
                        style={styles.icon}
                        size={24}
                        color="black"
                        Icon={ProfileIcon}
                        onPress={onLogout}
                    />
                    <Text style={styles.infoText}>Account: {balance}</Text>
                    <BellIcon focused={false} color="black" />
                </View>

                <View>
                    <Subtitle style={{ color: 'black' }}>Portfolio</Subtitle>
                </View>

                <View style={styles.portfolioInfo}>
                    <View style={styles.portfolioInfo}>
                        <Text style={styles.portfolioText}>{portfolio}</Text>

                        <GainIndicator gain={gain} positiveGain={positiveGain} />
                    </View>

                    <View style={styles.rewards}>
                        <CoinIcon color={colors.primary} />
                        <Text style={styles.rewardsText}>Earn Rewards</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ContentHeader;