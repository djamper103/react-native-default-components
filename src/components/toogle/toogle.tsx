import React, {FC, useCallback, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {dw} from '../../utils/dimensions';
import {RadioButton} from '../radioButton';

type ToogleProps = {
  isActive: boolean;
  startState?: any;
  endState?: any;
  setActive: (value: boolean) => void;
};

export const Toogle: FC<ToogleProps> = ({
  isActive,
  startState = {x: 6, y: dw(-25)},
  endState = {x: dw(35), y: dw(-25)},
  setActive,
}) => {
  const onPress = useCallback(() => {
    setActive(!isActive);
  }, [isActive, setActive]);
  const animatedValue = useState(new Animated.ValueXY(startState))[0];
  const moveToogle = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: isActive ? startState : endState,
      useNativeDriver: false,
      duration: 300,
      easing: Easing.ease,
    }).start(() => {
      onPress();
    });
  }, [animatedValue, endState, isActive, onPress, startState]);
  return (
    <TouchableOpacity style={styles.container} onPress={moveToogle}>
      <View
        style={[
          styles.containerToogle,
          isActive && styles.containerToogleActive,
        ]}
      />
      <Animated.View style={animatedValue.getLayout()}>
        <RadioButton isActive={isActive} onPress={onPress} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: dw(20),
  },
  containerToogle: {
    borderRadius: dw(50),
    width: dw(60),
    height: dw(30),
    backgroundColor: COLORS.GHOST,
  },
  containerToogleActive: {
    backgroundColor: COLORS.RED,
  },
});
