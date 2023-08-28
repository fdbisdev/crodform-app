import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Title, Subtitle } from '@atoms';
import {
    plantFundData,
    solarFundData,
    windFundDetailedData,
} from '@utils';

import { FundCard, ContentHeader } from '@organisms';

import styles from './styles';

import {
    WindIcon,
    SunIcon,
    CarbonCreditsLogo,
    LeafIcon
} from '../../assets/icons';

const CARDS = [0, 1];

const Home = () => {
    const { top } = useSafeAreaInsets();

    return (
        <ScrollView>
            <View style={[styles.container, { paddingTop: top }]}>
                <ContentHeader
                    balance="$1,200.00"
                    portfolio="$8,333.67"
                    gain="23.6%"
                    positiveGain
                />

                <View style={styles.contentWrapper}>
                    <Title>Funds</Title>

                    <ScrollView
                        style={styles.fundsContainer}
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <FundCard
                            Icon={WindIcon}
                            label="Wind Fund"
                            code="WFND"
                            value="$1032.23"
                            gain="32.4%"
                            positiveGain
                            graphData={windFundDetailedData}
                        />
                        <FundCard
                            Icon={SunIcon}
                            label="Solar Fund"
                            code="SFND"
                            value="$973.69"
                            gain="6.79%"
                            graphData={solarFundData}
                        />
                        <FundCard
                            Icon={LeafIcon}
                            label="Plant Fund"
                            code="PFND"
                            value="$5169.47"
                            gain="150%"
                            positiveGain
                            graphData={plantFundData}
                        />
                    </ScrollView>

                    <View style={styles.carbonCredits}>
                        <View style={styles.carbonText}>
                            <Text
                                numberOfLines={2}
                                lineBreakMode="middle"
                                style={styles.carbonTitle}>
                                Learn more about carbon credits
                            </Text>
                            <Subtitle style={{ color: 'white' }}>
                                Check out our top tips!
                            </Subtitle>
                        </View>

                        <CarbonCreditsLogo />
                    </View>

                    <View
                        style={styles.cardTemplate}
                    >
                        {CARDS.map((_, index) => (
                            <View
                                key={index}
                                style={styles.cardInnerContainer}
                            >
                                <View
                                    style={{
                                        width: '80%',
                                    }}
                                >
                                    {
                                        index === 0 && (
                                            <Text
                                                style={styles.cardText}
                                            >
                                                Why should you invest here?
                                            </Text>
                                        )
                                    }
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;
