import { View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View style={{backgroundColor:'#f00', flex:1}} className='bg-red-500'>
      
    </View>
  );
}
