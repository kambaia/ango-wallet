import { defaultConfig } from '@/styles/colors';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import RecentActivitiesItems from './RecentActivities';


  
type TRecentActivities = {
    id: string;
    name: string;
    title: string;
    startHour: string;
    endHour: string

}
const RecentActivities = () => {
    const renderItem: ListRenderItem<TRecentActivities> = useCallback(
        ({ item }) => (
            <RecentActivitiesItems
                item={item}
            />
        ),
        []
    );

    return (
        <View style={{ padding: defaultConfig.mobilePadding.medium }}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    todayText: {
        fontSize: defaultConfig.fontSizes.largeMd,
        color: defaultConfig.colors.gray100

    },
    dateToDayText: {
        fontSize: defaultConfig.fontSizes.sm,
        color: defaultConfig.colors.gray100
    }
})

export default RecentActivities;
