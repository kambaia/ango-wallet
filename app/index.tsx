import { LoginForm } from '@/components/pages/login';
import ProfileHeader from '@/components/shared/ProfileHeader';
import React from 'react';
import { View } from 'react-native';

const StartScreen = () => {
  return (
    <View className='flex-1 bg-[#007BFF] flex-col justify-end'>
      <ProfileHeader />
      <LoginForm />
    </View>
  );
};

export default StartScreen;
