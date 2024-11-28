
import LoginForm from '@/components/pages/login';
import RegisterForm from '@/components/pages/register';
import Header from '@/components/shared/header';
import ProfileHeader from '@/components/shared/ProfileHeader';
import React from 'react';
import { View } from 'react-native';

const loginScreen = () => {
  return (
    <View className='flex-1 bg-[#007BFF] flex-col justify-end'>
      <ProfileHeader/>
      <LoginForm/>
    </View>
  );
};

export default loginScreen;
