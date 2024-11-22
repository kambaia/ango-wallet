import { Tabs } from 'expo-router';
import React from 'react';
import { defaultConfig } from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


const TabsLayout = () => {
    return (
        <Tabs sceneContainerStyle={{
            backgroundColor: defaultConfig.colors.gray600,
        }}
            screenOptions={{

                headerShown: false, tabBarShowLabel: false, 
                tabBarActiveTintColor:defaultConfig.colors.primary,
                tabBarInactiveTintColor: defaultConfig.colors.gray300,
                tabBarStyle: {
                    backgroundColor: defaultConfig.colors.gray400,
                    borderTopColor: defaultConfig.colors.primary,
                }

            }}
        >
            <Tabs.Screen name='index'
                options={{
                   tabBarIcon: ({ color, size }) => (
                        <Feather name='home' size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name='search/index'
                options={{
                     tabBarIcon: ({ color, size }) => (
                        <Feather name='search' size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name='report/index'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='edit' size={size} color={color} />
                    )
                }} />


            <Tabs.Screen name='notification/index'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='inbox' size={size} color={color} />
                    ),
                    tabBarBadge: 20
                }} />
        </Tabs>

    );
}

const styles = StyleSheet.create({})

export default TabsLayout;
