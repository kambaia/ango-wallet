import { defaultConfig } from "@/styles/colors";
import { StyleSheet } from "react-native";



export const s = StyleSheet.create({
   container:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:10,
    paddingHorizontal:defaultConfig.mobilePadding.medium,
    paddingTop:30,
    paddingBottom:10,
    borderBottomWidth: 0.2,
    borderBottomColor: defaultConfig.colors.gray400
   },
})