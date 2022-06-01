import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Input} from '../input';

interface HookFormComponentProps {
  data: any[];
  control: any;
  handleSubmit: any;
  errors: any;
  containerStyle?: any;
  containerStyleInput?: any;
  onSubmit: (value: any) => void;
}

export const HookFormComponent: FC<HookFormComponentProps> = ({
  data,
  control,
  handleSubmit,
  errors,
  containerStyle,
  containerStyleInput,
  onSubmit,
}) => {
  const onSubmitForm = (value: any) => onSubmit(value);
  return (
    <View style={containerStyle && containerStyle}>
      {data.length > 0 &&
        data.map((el: any) => {
          return (
            <View style={containerStyleInput && containerStyleInput} key={el}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    containerStyle={styles.input}
                    text={value}
                    placeholder={el}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
                name={el}
              />
              {errors[el] && <Text>This is required.</Text>}
            </View>
          );
        })}
      <Button title="Submit" onPress={handleSubmit(onSubmitForm)} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    // borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 20,
  },
});
