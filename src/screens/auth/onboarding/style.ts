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
  mainButtonContainer: {
    marginTop: hp(70),
    marginHorizontal: wp(20),
  },
  buttonStyle: {
    marginTop: hp(10),
    backgroundColor: theme.colors.OFF_WHITE_100,
  },
  titleStyle: {
    color: theme.colors.PRIMARY,
  },
  buttonSectionContainer: {
    marginTop: hp(70),
    marginHorizontal: wp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: hp(450),
    zIndex: 10000,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    width: wp(8),
    height: hp(8),
    borderRadius: 100,
    marginLeft: wp(14),
  },
});
