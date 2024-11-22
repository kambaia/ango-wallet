import CardDays from '@/components/shared/CardDays';
import CardHome from '@/components/shared/CardHome';
import Header from '@/components/shared/header';
import RecentActivities from '@/components/shared/RecentActivities';
import { defaultConfig } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

export const dataWeeks = [
    {
        days: 'Seg',
        hour: 3,
        id: 1
    },
    {
        days: 'Ter',
        hour: 2,
        id: 2
    },
    {
        days: 'Quar',
        hour: 30,
        id: 3
    },
    {
        days: 'Qui',
        hour: 2,
        id: 4
    },
    {
        days: 'Sex',
        hour: 5,
        id: 5
    },
    {
        days: 'Sáb',
        hour: 7,
        id: 6
    },
    {
        days: 'Dom',
        hour: 5,
        id: 7
    }
]

interface ListItem {
    id: string;
    name: string;
    user: string;
}

const imageMap: Record<string, any> = {
    'profile-photo': require('../../../assets/icons/profile-photo.png'),
    'profile-photo-2': require('../../../assets/icons/profile-photo-2.png'),
    'profile-photo-3': require('../../../assets/icons/profile-photo-3.png'),
    'profile-photo-4': require('../../../assets/icons/profile-photo-4.png'),
};

const data = [
    { id: '1', name: 'Ali', user: 'profile-photo' },
    { id: '2', name: 'Steve', user: 'profile-photo-2' },
    { id: '3', name: 'Ahmed', user: 'profile-photo-3' },
    { id: '4', name: 'Marina', user: 'profile-photo-4' },
];


const renderItem = ({ item }: { item: ListItem }) => (
    <View className='bg-white flex flex-col justify-center items-center mr-5 gap-2'>
        <Image source={imageMap[item.user]} className='w-20 h-20 rounded-full' />
        <Text className='text-black text-[15px]'>{item.name}</Text>
    </View>
);

const HomePage = () => {
    return (
        <View className='flex-1 bg-white'>
            <CardHome />

            <View style={{ padding: defaultConfig.mobilePadding.medium }}>
                <Text className='font-bold text-[18px]'>Recent Transfers</Text>
                <View className='flex flex-row justify-center items-start pt-5 gap-5'>
                    <View className='bg-white flex flex-col justify-center items-center gap-2'>
                        <Image source={require('../../../assets/icons/new-transfer.png')} className='w-20 h-20 rounded-full' />
                        <Text className='text-black text-[15px]'>Add</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className=''
                    />
                </View>
            </View>

            <View style={{ padding: defaultConfig.mobilePadding.medium, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: defaultConfig.colors.gray200, fontSize: defaultConfig.fontSizes.sm }}>Acividades recentes</Text>
                <Text style={{ color: defaultConfig.colors.gray200, fontSize: defaultConfig.fontSizes.sm }}> <Feather name='plus' size={20} color={defaultConfig.colors.gray200} /></Text>
            </View>

            <RecentActivities />

        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
    },
});

export default HomePage;
