import { defaultConfig } from '@/styles/colors';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
type TRecentActivities = {
    item: {
        name: string;
        title: string;
        startHour: string;
        endHour: string
    }

}
const RecentActivitiesItems = ({ item }: TRecentActivities) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text style={styles.lessionText}>{item.title}</Text>
            <View style={{display:'flex', flexDirection: 'row', gap:10}}>
                <Text style={styles.hours}>Início:  {item.startHour}</Text>
                <Text style={styles.hours}>Terminou: {item.endHour}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: defaultConfig.mobilePadding.medium,
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: defaultConfig.colors.gray400
    },
    titleText: {
        fontSize: defaultConfig.fontSizes.sm,
        color: defaultConfig.colors.gray100

    },
    lessionText: {
        fontSize: defaultConfig.fontSizes.lg,
        color: defaultConfig.colors.yellow
    },
    hours: {
        fontSize: defaultConfig.fontSizes.sm,
        color: defaultConfig.colors.gray300
    }
})

export default RecentActivitiesItems;
