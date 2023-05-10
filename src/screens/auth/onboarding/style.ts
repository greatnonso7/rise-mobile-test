import { deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  onboardingItemContainer: {
    width: deviceWidth,
  },
  itemImage: {
    width: wp(300),
    height: hp(300),
    marginTop: hp(20),
    alignSelf: 'center',
  },
  onboardingInfoContainer: {
    marginTop: hp(80),
    marginHorizontal: wp(20),
  },
  onboardingMainText: {
    fontFamily: theme.font.TomatoGroteskMedium,
    fontSize: hp(20),
  },
  onboardingSubText: {
    fontFamily: theme.font.DMSansRegular,
    paddingTop: hp(12),
    lineHeight: hp(22),
    fontSize: hp(14),
    color: theme.colors.TEXT_BLACK,
  },
  buttonSectionContainer: {
    marginTop: hp(50),
    marginHorizontal: wp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
