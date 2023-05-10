import React from 'react';
import { StatusBar, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from 'theme';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  backgroundColor?: string;
}

const Screen = ({ children, backgroundColor }: Props) => {
  const localStyles: StyleProp<ViewStyle> = {
    ...(backgroundColor && { backgroundColor }),
  };

  console.log(localStyles, 'localStyles');
  return (
    <SafeAreaView style={[styles.container, localStyles]}>
      <StatusBar
        backgroundColor={backgroundColor || 'white'}
        translucent
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.WHITE,
  },
});

export default Screen;
