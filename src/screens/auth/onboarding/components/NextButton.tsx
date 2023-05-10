import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { hp, wp } from 'constants/layout';
import theme from 'theme';

interface NextButtonProps {
  isDisabled?: boolean;
  text?: string;
  icon: ImageSourcePropType;
  tintColor?: string;
  onPress?: () => void;
}

const NextButton = ({
  isDisabled,
  text,
  icon,
  tintColor,
  onPress,
}: NextButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress && onPress()}
      style={[
        styles.nextButtonContainer,
        isDisabled && styles.isDisabledStyle,
      ]}>
      {text && (
        <Text style={[styles.textStyle, { color: tintColor }]}>{text}</Text>
      )}
      <Image
        source={icon}
        style={[
          styles.iconStyle,
          { tintColor: isDisabled ? theme.colors.GREY : tintColor },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nextButtonContainer: {
    height: hp(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp(16),
    backgroundColor: theme.colors.OFF_WHITE,
    borderRadius: hp(5),
  },
  isDisabledStyle: {
    opacity: 0.6,
    backgroundColor: theme.colors.OFF_WHITE,
  },
  textStyle: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(14),
    paddingRight: wp(10),
  },
  iconStyle: {
    width: wp(15),
    height: hp(15),
  },
});
export default NextButton;
