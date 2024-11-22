import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { s } from './style';
import { Feather } from '@expo/vector-icons';
import { defaultConfig } from '@/styles/colors';
type HeaderProps = {
    search: boolean;
}
const Header = ({ search }: HeaderProps) => {
    return (
        <View>
            <View style={s.container}>
              
                <View>
                    <Feather size={defaultConfig.fontSizes.lg} name='more-vertical' color={defaultConfig.colors.gray100} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
