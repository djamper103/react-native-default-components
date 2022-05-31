import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dw} from '../../utils/dimensions';

interface ButtonContainerProps {
  text?: any;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
  onPress?: () => void;
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
  text = '',
  containerStyle,
  buttonStyle,
  textStyle,
  onPress,
}) => {
  return (
    <View style={containerStyle && containerStyle}>
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          buttonStyle && buttonStyle,
          text.length > 10 && styles.buttonLong,
        ]}>
        {text !== '' && (
          <Text
            style={[
              styles.text,
              textStyle && textStyle,
              text.length > 10 && styles.textLong,
            ]}>
            {text}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.STEEL_BLUE,
    width: dw(185),
    paddingVertical: dw(8),
    borderRadius: dw(15),
    justifyContent: 'center',
  },
  buttonLong: {
    paddingVertical: dw(10),
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 24,
    textAlign: 'center',
  },
  textLong: {
    fontSize: 20,
  },
});
