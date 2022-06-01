import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dw} from '../../utils/dimensions';
import {ButtonContainer} from '../button';

interface ButtonContainerProps {
  isActive?: boolean;
  containerStyle?: ViewStyle;
  containerStyleButton?: ViewStyle;
  onPress?: () => void;
}

export const RadioButton: FC<ButtonContainerProps> = ({
  isActive,
  containerStyle,
  containerStyleButton,
  onPress,
}) => {
  return (
    <View style={containerStyle && containerStyle}>
      <ButtonContainer
        buttonStyle={
          containerStyleButton
            ? containerStyleButton
            : isActive
            ? styles.buttonActive
            : styles.button
        }
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: dw(20),
    height: dw(20),
    borderRadius: dw(20),
    borderWidth: dw(5),
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.TRANSPARENT,
    paddingVertical: 0,
  },
  buttonActive: {
    width: dw(20),
    height: dw(20),
    borderRadius: dw(20),
    backgroundColor: COLORS.WHITE,
    paddingVertical: 0,
  },
});
