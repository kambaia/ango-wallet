
import RegisterForm from '@/components/pages/register';
import React from 'react';
import { View } from 'react-native';

const RegisterScreen = () => {
  return (
    <View className='flex-1 bg-[#007BFF] flex-col justify-end'>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;
