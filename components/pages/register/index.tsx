import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export const RegisterForm = () => {
  return (
    <View className="bg-white w-full rounded-tl-3xl rounded-tr-3xl p-8">
      <Text className="text-2xl font-bold mb-5 text-gray-800">Criar a sua conta AngoWallet</Text>
      <View className='w-full flex-col justify-around items-center gap-3'>
        <View className='w-full'>
          <Text>Nome: </Text>
          <TextInput
            className="w-full border border-gray-300 rounded-md p-2.5 mb-3.5 text-base"
            placeholder="Código"
            keyboardType="numeric"
          />
        </View>
        <View className='w-full'>
          <Text>E-mail: </Text>
          <TextInput
            className="w-full border border-gray-300 rounded-md p-2.5 mb-3.5 text-base"
            placeholder="Senha"
            secureTextEntry
          />
        </View>
        <View className='w-full'>
          <Text>Senha: </Text>
          <TextInput
            className="w-full border border-gray-300 rounded-md p-2.5 mb-3.5 text-base"
            placeholder="Senha"
            secureTextEntry
          />
        </View>

      </View>
      <View className='gap-5'>
        <TouchableOpacity onPress={() => router.push('/confirm-register')} className="w-full bg-blue-500 p-3.5 rounded-md items-center">
          <Text className="text-white text-base font-bold">Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/')} className="w-full items-center">
          <Text className="text-blue-600 text-base font-bold">Acessar a sua conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;