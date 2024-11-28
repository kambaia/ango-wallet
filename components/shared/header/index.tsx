import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
type HeaderProps = {
    search: boolean;
    colorWhite?:boolean
}
const HeaderMain = ({ search, colorWhite }: HeaderProps) => {
    return (
        <View className='w-full flex flex-row justify-between items-start'>
            <View className='flex flex-row gap-2 items-center'>
                <Image source={require('../../../assets/icons/profile-photo.png')} className='w-14 h-14 rounded-full border' />
                <View className='flex flex-col gap-0'>
                    <Text className={`${colorWhite? 'text-gray-700':'text-white'} font-bold text-lg`}>Olá,</Text>
                    <Text className={`${colorWhite? 'text-gray-700':'text-white'} font-bold text-lg`}>Kambaia!</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => router.push("/register")}>
                    <Ionicons name="settings-outline" size={24} color={colorWhite? '#252424':'white'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HeaderMain;
