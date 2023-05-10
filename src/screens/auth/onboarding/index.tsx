import Screen from 'components/Screen';
import { deviceWidth } from 'constants/layout';
import { onboardingData } from 'data';
import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import theme from 'theme';
import { styles } from './style';
import NextButton from './components/NextButton';

const Onboarding = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;

  const bgColors: Record<string, string> = {
    0: theme.colors.ORANGE_LIGHT,
    1: theme.colors.INDIGO_LIGHT,
    2: theme.colors.PRIMARY_LIGHT,
  };

  const scrollRef = useRef<ScrollView>(null);

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / deviceWidth);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  return (
    <Screen backgroundColor={bgColors[pageIndex]}>
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        decelerationRate={'fast'}
        snapToInterval={deviceWidth}
        onScroll={event => {
          setSliderPage(event);
        }}>
        {onboardingData.map(onboarding => {
          return (
            <View style={styles.onboardingItemContainer} key={onboarding.id}>
              <Image
                source={onboarding.icon}
                style={styles.itemImage}
                resizeMode="contain"
              />
              <View style={styles.onboardingInfoContainer}>
                <Text
                  style={[
                    styles.onboardingMainText,
                    { color: onboarding.color },
                  ]}>
                  {onboarding.title}
                </Text>
                <Text style={styles.onboardingSubText}>
                  {onboarding.description}
                </Text>
              </View>

              {pageIndex === 2 ? (
                <View />
              ) : (
                <View style={styles.buttonSectionContainer}>
                  <NextButton
                    onPress={() =>
                      scrollRef?.current?.scrollTo({
                        x: deviceWidth * (pageIndex - 1),
                      })
                    }
                    isDisabled={pageIndex === 0 ? true : false}
                    icon={theme.images['arrow-left']}
                    tintColor={onboarding.color}
                  />
                  <NextButton
                    onPress={() =>
                      scrollRef?.current?.scrollTo({
                        x: deviceWidth * (pageIndex + 1),
                      })
                    }
                    icon={theme.images['arrow-right']}
                    tintColor={onboarding.color}
                    text={'Next'}
                  />
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

export default Onboarding;
