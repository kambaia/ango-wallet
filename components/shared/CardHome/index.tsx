import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HeaderMain from '../header';


const CardHome = () => {
    return (
        <View className='w-full px-5 py-4 flex flex-col gap-5 bg-[#270685]'>
            <HeaderMain search={false} colorWhite={false} />
            <View className='w-full rounded-lg flex justify-center items-center flex-col py-8 px-10 bg-[#42239C]'>
                <Text className='text-gray-300'>Saldo na Conta</Text>
                <View className='flex flex-row w-full mt-5 items-end justify-center'>
                    <Text className='text-white text-center font-bold text-5xl'>AOA14,235</Text>
                    <Text className='text-white text-center font-light text-2xl pb-1'>.34</Text>
                </View>
                <View className='w-full flex flex-row justify-between items-center mt-5'>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <Octicons name="upload" size={20} color="white" />
                        <Text className='text-white text-center'>Transferidos</Text>
                    </TouchableOpacity>

                    <View className='h-10 border-l border-[#6F45E9]'></View>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <Octicons name="download" size={20} color="white" />
                        <Text className='text-white text-center'>Recebidos</Text>
                    </TouchableOpacity>

                    <View className='h-10 border-l border-[#6F45E9]'></View>

                    <TouchableOpacity className='flex flex-col gap-2 items-center'>
                        <MaterialIcons name="currency-exchange" size={20} color="white" />
                        <Text className='text-white text-center'>Transferir</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

export default CardHome;