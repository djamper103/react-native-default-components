import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {ButtonContainer} from './components/button';
import {ErrorContainer} from './components/errorContainer';
import {IconContainer} from './components/iconContainer';
import {Input} from './components/input';
import {LineComponent} from './components/lineComponent';
import {LoaderContainer} from './components/loader';
import {ModalContainer} from './components/modal';
import {TextContainer} from './components/textContainer';
import {TextIconContainer} from './components/textPlusIconContainer';
import {Toogle} from './components/toogle/toogle';
import {COLORS} from './constants/colors';
import {DARK_THEME_ICON, LIGHT_THEME_ICON} from './constants/images';
import {dw} from './utils/dimensions';

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [isActiveToogle, setIsModalToogle] = useState(false);
  const [isActiveToogle1, setIsModalToogle1] = useState(false);
  const onPress = () => {
    setIsModal(!isModal);
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <ButtonContainer
            containerStyle={styles.container}
            onPress={onPress}
            text={'Press me'}
          />
          <ErrorContainer />
          <IconContainer />
          <Input />
          <LineComponent />
          <LoaderContainer />
          <ModalContainer isModal={isModal} onPress={onPress}>
            <ButtonContainer
              containerStyle={styles.containerModal}
              onPress={onPress}
              text={'Press me'}
            />
          </ModalContainer>
          <TextContainer textHeader="textHeader" textBottom="textBottom" />
          <TextIconContainer textHeader="textHeader" textBottom="textBottom" />
          <Toogle
            isActive={isActiveToogle}
            leftIcon={LIGHT_THEME_ICON}
            rightIcon={DARK_THEME_ICON}
            containerStyleButton={styles.containerStyleButton}
            setActive={setIsModalToogle}
          />
          <Toogle
            isActive={isActiveToogle1}
            setActive={setIsModalToogle1}
            containerToogleStyle={
              isActiveToogle1
                ? styles.containerToogleActive
                : styles.containerToogle
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModal: {
    padding: dw(40),
    backgroundColor: COLORS.OXFORD_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: dw(50),
  },
  containerStyleButton: {
    width: dw(20),
    height: dw(20),
    borderRadius: dw(20),
    backgroundColor: COLORS.WHITE,
    paddingVertical: 0,
  },
  containerToogle: {
    backgroundColor: COLORS.GHOST,
  },
  containerToogleActive: {
    backgroundColor: COLORS.RED,
  },
});

export default App;
