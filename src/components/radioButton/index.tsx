import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dw} from '../../utils/dimensions';
import {ButtonContainer} from '../button';

interface ButtonContainerProps {
  isActive?: boolean;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

export const RadioButton: FC<ButtonContainerProps> = ({
  isActive,
  containerStyle,
  onPress,
}) => {
  return (
    <View style={containerStyle && containerStyle}>
      <ButtonContainer
        buttonStyle={isActive ? styles.buttonActive : styles.button}
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
    borderWidth: dw(6),
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.GHOST,
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
