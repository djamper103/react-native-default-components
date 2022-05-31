import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dh} from '../../utils/dimensions';

interface LineComponentProps {
  containerStyle?: ViewStyle;
}

export const LineComponent: FC<LineComponentProps> = ({containerStyle}) => {
  return <View style={[styles.container, containerStyle && containerStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: COLORS.GHOST,
    marginVertical: dh(20),
  },
});
