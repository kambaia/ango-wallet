import React from 'react';
import { View, Image, Text } from 'react-native';

const ProfileHeader = () => {
  return (
    <View className="items-center mb-5">
      <Image
        source={require("@/assets/user.jpg")} 
        className="w-24 h-24 rounded-full mb-2.5"
      />
      <Text className="text-white text-xl font-bold">Kambaia Alberto</Text>
    </View>
  );
};

export default ProfileHeader;