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
import {dw} from './utils/dimensions';

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [isActiveToogle, setIsModalToogle] = useState(false);
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
          <TextContainer />
          <TextIconContainer />
          <Toogle isActive={isActiveToogle} setActive={setIsModalToogle} />
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
});

export default App;
