import React, {FC} from 'react';
import {Modal, StyleSheet, ViewStyle} from 'react-native';

interface ModalContainerProps {
  children?: any;
  isModal?: boolean;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

export const ModalContainer: FC<ModalContainerProps> = ({
  children,
  isModal,
  containerStyle,
  onPress,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModal}
      onRequestClose={onPress}
      style={[styles.container, containerStyle && containerStyle]}>
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
