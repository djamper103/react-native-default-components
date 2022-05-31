import React, {FC} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dw} from '../../utils/dimensions';

interface TextContainerProps {
  textHeader?: string;
  textBottom?: string;
  isTheme?: boolean;
  containerStyle?: ViewStyle;
  textHeaderStyle?: ViewStyle;
  textBottomStyle?: ViewStyle;
}

export const TextContainer: FC<TextContainerProps> = ({
  textHeader = 'text Header',
  textBottom,
  isTheme,
  containerStyle,
  textHeaderStyle,
  textBottomStyle,
}) => {
  return (
    <View style={containerStyle && containerStyle}>
      {textHeader && (
        <Text style={[styles.textHeader, textHeaderStyle && textHeaderStyle]}>
          {textHeader}
        </Text>
      )}
      {textBottom && (
        <Text
          style={[
            styles.textBottom,
            isTheme && styles.textActive,
            textBottomStyle && textBottomStyle,
          ]}>
          {textBottom}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: COLORS.GHOST,
    marginBottom: dw(5),
  },
  textBottom: {
    fontSize: 20,
    color: COLORS.DUNE,
  },
  textActive: {
    color: COLORS.WHITE,
  },
});
