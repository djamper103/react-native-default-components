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
import {HookFormComponent} from './components/hookForm';
import {IconContainer} from './components/iconContainer';
import {Input} from './components/input';
import {LineComponent} from './components/lineComponent';
import {LoaderContainer} from './components/loader';
import {ModalContainer} from './components/modal';
import {TextContainer} from './components/textContainer';
import {TextIconContainer} from './components/textPlusIconContainer';
import {COLORS} from './constants/colors';
import {dw} from './utils/dimensions';

import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SwitchComponent} from './components/switch';

type FormData = {
  firstName: string;
  age: string;
};

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);
  // const [isActiveToogle1, setIsModalToogle1] = useState(false);
  const onPress = () => {
    setIsModal(!isModal);
  };

  const schema = yup
    .object({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({resolver: yupResolver(schema)});
  const onSubmit = (data: any) => console.log(data);

  const onPressSwitch = () => {
    setIsSwitch(!isSwitch);
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
        </View>
        <HookFormComponent
          control={control}
          errors={errors}
          data={Object.keys(schema.fields)}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <SwitchComponent
          isTheme={isSwitch}
          containerStyle={styles.containerStyleSwitch}
          onPress={onPressSwitch}
        />
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
  containerStyleSwitch: {
    marginVertical: 50,
  },
});

export default App;
