import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CardHome = () => {
    return (
        <View className='w-full px-5 py-10 flex flex-col gap-5 bg-[#270685]'>

            <View className='w-full flex flex-row justify-between items-start'>
                <View className='flex flex-row gap-2 items-center'>
                    <Image source={require('../../../assets/icons/profile-photo.png')} className='w-14 h-14 rounded-full border' />
                    <View className='flex flex-col gap-0'>
                        <Text className='text-white font-bold text-lg'>Hello,</Text>
                        <Text className='text-white font-bold text-lg'>Abdullah!</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Ionicons name="settings-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='w-full rounded-lg flex justify-center items-center flex-col py-8 px-10 bg-[#42239C]'>
                <Text className='text-gray-300'>Main Balance</Text>
                <View className='flex flex-row w-full mt-5 items-end justify-center'>
                    <Text className='text-white text-center font-bold text-5xl'>$14,235</Text>
                    <Text className='text-white text-center font-light text-2xl pb-1'>.34</Text>
                </View>
                <View className='w-full flex flex-row justify-between items-center mt-5'>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <Octicons name="upload" size={20} color="white" />
                        <Text className='text-white text-center'>Top Up</Text>
                    </TouchableOpacity>

                    <View className='h-10 border-l border-[#6F45E9]'></View>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <Octicons name="download" size={20} color="white" />
                        <Text className='text-white text-center'>Withdraw</Text>
                    </TouchableOpacity>

                    <View className='h-10 border-l border-[#6F45E9]'></View>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <MaterialIcons name="currency-exchange" size={20} color="white" />
                        <Text className='text-white text-center'>Transfer</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

export default CardHome;