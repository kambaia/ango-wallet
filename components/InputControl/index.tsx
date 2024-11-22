import React, { useState } from 'react';
import { Pressable, TextInput, View, TextInputProps } from 'react-native';
import { Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';

type InputControlProps = {
  form: {
    control: any; // Você pode usar `Control<any>` se tipado no react-hook-form
    name: string;
  };
} & TextInputProps; // Herda todas as propriedades de TextInput

const InputControl = ({ form, secureTextEntry, ...rest }: InputControlProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="relative">
      <Controller
        control={form.control}
        name={form.name}
        render={({ field: { value, onChange } }) => (
          <TextInput
            className="w-full bg-inputColor py-5 mt-2 rounded-md"
            secureTextEntry={secureTextEntry && !showPassword}
            value={value}
            onChangeText={onChange}
            {...rest} // Herda as propriedades extras passadas
          />
        )}
      />
      {secureTextEntry && (
        <Pressable
          className="absolute right-5 top-[18px]"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color="gray"
          />
        </Pressable>
      )}
    </View>
  );
};

export default InputControl;
