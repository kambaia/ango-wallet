import { DrawerContent } from '@/components/drawer-content/DrawerContent';
import { Drawer  } from 'expo-router/drawer';


export default function DrawerLayout() {
   return(
    <Drawer
     defaultStatus='closed'
     screenOptions={
      {
        headerShown: false
      }
     }
     drawerContent={(props)=><DrawerContent {...props}/>}
    >
        <Drawer.Screen name='(tabs)'/>
    </Drawer>
  );
}
