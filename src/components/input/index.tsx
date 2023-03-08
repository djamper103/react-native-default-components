import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dw} from '../../utils/dimensions';

interface InputProps {
  text?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  placeholder?: string;
  placeholderTextColor?: string;
  isTheme?: boolean;
  secureTextEntry?: boolean;
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  containerLeftIcon?: ViewStyle;
  containerRightIcon?: ViewStyle;
  leftIconStyle?: any;
  rightIconStyle?: any;
  onChangeText?: (value: string) => any;
  onBlur?: () => void;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
}

export const Input: FC<InputProps> = ({
  text,
  leftIcon,
  rightIcon,
  placeholder = 'Search',
  placeholderTextColor = COLORS.BLACK,
  isTheme,
  secureTextEntry,
  inputStyle,
  containerStyle,
  containerLeftIcon,
  containerRightIcon,
  leftIconStyle,
  rightIconStyle,
  onChangeText,
  onBlur,
  onPressLeftIcon,
  onPressRightIcon,
}) => {
  return (
    <View
      style={[
        styles.container,
        isTheme && styles.containerActive,
        containerStyle,
      ]}>
      {leftIcon && (
        <TouchableOpacity
          style={containerLeftIcon && containerLeftIcon}
          onPress={onPressLeftIcon}>
          <Image
            source={leftIcon}
            style={[styles.image, leftIconStyle && leftIconStyle]}
          />
        </TouchableOpacity>
      )}
      <TextInput
        value={text}
        placeholder={placeholder}
        style={[styles.input, inputStyle && inputStyle]}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {rightIcon && (
        <TouchableOpacity
          style={containerRightIcon && containerRightIcon}
          onPress={onPressRightIcon}>
          <Image
            source={rightIcon}
            style={[styles.image, rightIconStyle && rightIconStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: dw(14),
    height: dw(50),
    borderWidth: dw(0.8),
    borderColor: COLORS.BLACK,
    margin: dw(20),
    paddingHorizontal: dw(10),
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerActive: {
    borderColor: COLORS.WHITE,
  },
  input: {
    height: dw(50),
    color: COLORS.BLACK,
    fontSize: 18,
  },
  image: {
    resizeMode: 'contain',
    backgroundColor: COLORS.TRANSPARENT,
    tintColor: COLORS.DUNE,
  },
});
