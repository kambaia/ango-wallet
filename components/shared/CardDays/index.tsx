import { defaultConfig } from '@/styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type CardDaysProps={
      item: {
        days: string,
        hour: number,
        id:  number
      }
    
}
const CardDays = ({ item }: CardDaysProps) => {
    return (
        <View>
            <View style={[styles.container, { padding: defaultConfig.mobilePadding.medium }]}>
                <Text style={styles.todayText}>{item.days}</Text>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.dayText}>{`${item.hour}`}</Text>
                <Text style={{fontSize:20, color:defaultConfig.colors.gray200}}>{`${item.hour < 10? 'h': 'min'}`}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: defaultConfig.colors.primary,
        borderRadius:10
    },
    todayText: {
        fontSize: defaultConfig.fontSizes.sm,
        color: defaultConfig.colors.gray100

    },
    dayText: {
        fontSize: defaultConfig.fontSizes.largeSm,
        color: defaultConfig.colors.gray100
    }
})

export default CardDays;
