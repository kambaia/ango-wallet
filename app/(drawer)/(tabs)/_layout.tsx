import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsLayout = () => {
    return (
        <Tabs
            sceneContainerStyle={{
                backgroundColor: "#fff",
            }}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar, // Aplica os estilos personalizados
                tabBarActiveTintColor: '#6F45E9', // Cor do ícone e texto ativo
                tabBarInactiveTintColor: '#4a4a4e', // Cor do ícone e texto inativo
                tabBarLabelStyle: styles.tabBarLabel, // Estilo dos textos
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-minus" size={35} color={color} />
                    ),
                    tabBarActiveTintColor: '#6F45E9',
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {fontSize: 16, fontWeight: '600'}
                }}
            />
            <Tabs.Screen
                name="search/index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View className='border-t-2 border-[#6F45E9] flex-1 flex justify-center items-center w-full'>
                            <MaterialCommunityIcons name="file-document-outline" size={35} color={color} />
                        </View>
                    ),
                    tabBarActiveTintColor: '#6F45E9',
                    tabBarLabelStyle: {fontSize: 16, fontWeight: '600'}
                }}
            />
            <Tabs.Screen
                name="report/index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="credit-card-outline" size={35} color={color} />
                    ),
                    tabBarActiveTintColor: '#6F45E9',
                    tabBarLabel: "Cartões",
                    tabBarLabelStyle: {fontSize: 16, fontWeight: '600'},
                }}
            />
            <Tabs.Screen
                name="notification/index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="wallet-outline" size={35} color={color} />
                    ),
                    tabBarActiveTintColor: '#6F45E9',
                    tabBarLabel: "Mais",
                    tabBarLabelStyle: {fontSize: 16, fontWeight: '600'}
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff', // Fundo da barra de abas
        borderTopWidth: 1, // Borda superior
        borderTopColor: '#e0e0e0', // Cor da borda
        height: 70, // Altura da barra de abas
    },
    tabBarLabel: {
        fontSize: 12, // Tamanho do texto
        fontWeight: '600', // Peso da fonte
    },
});

export default TabsLayout;
