import { styled } from 'nativewind';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView, "h-full bg-[#000]", { props: { edges: "bottom" } })
export default Container;