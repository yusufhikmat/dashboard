import {createContext, useState, useMemo} from 'react'
import  { createTheme} from '@mui/material/styles'
import { PaletteMode } from '@mui/material';
//color
export const colorMode =(mode:string)=>({
    ...(mode==='dark' 
    ? { 
        grey: {
            100: "#cce6cc",
            200: "#99cc99",
            300: "#66b366",
            400: "#339933",
            500: "#008000",
            600: "#006600",
            700: "#004d00",
            800: "#003300",
            900: "#001a00"
   },
   indigo: {
       100: "#d1dfd1",
       200: "#a3bea3",
       300: "#769e76",
       400: "#487d48",
       500: "#1a5d1a",
       600: "#154a15",
       700: "#103810",
       800: "#0a250a",
       900: "#051305"
   },
   green: {
       100: "#dbf5ee",
       200: "#b7ebde",
       300: "#94e2cd",
       400: "#70d8bd",
       500: "#4cceac",
       600: "#3da58a",
       700: "#2e7c67",
       800: "#1e5245",
       900: "#0f2922"
   },
   black: {
       100: "#cccccc",
       200: "#999999",
       300: "#666666",
       400: "#333333",
       500: "#000000",
       600: "#000000",
       700: "#000000",
       800: "#000000",
       900: "#000000"
},
   yellow: {
       100: "#fcf4d8",
       200: "#f9e9b1",
       300: "#f7df89",
       400: "#f4d462",
       500: "#f1c93b",
       600: "#c1a12f",
       700: "#917923",
       800: "#605018",
       900: "#30280c"
   },
   
 } : { 
        grey: {
            100: "#001a00",
            200: "#003300",
            300: "#004d00",
            400: "#006600",
            500: "#008000",
            600: "#339933",
            700: "#66b366",
            800: "#99cc99",
            900: "#cce6cc",
   },
   black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
},
   indigo: {
       100: "#051305",
       200: "#0a250a",
       300: "#103810",
       400: "#154a15",
       500: "#1a5d1a",
       600: "#487d48",
       700: "#769e76",
       800: "#a3bea3",
       900: "#d1dfd1",
   },
   green: {
       100: "#0f2922",
       200: "#1e5245",
       300: "#2e7c67",
       400: "#3da58a",
       500: "#4cceac",
       600: "#70d8bd",
       700: "#94e2cd",
       800: "#b7ebde",
       900: "#dbf5ee",
   },
   
   yellow: {
       100: "#30280c",
       200: "#605018",
       300: "#917923",
       400: "#c1a12f",
       500: "#f1c93b",
       600: "#f4d462",
       700: "#f7df89",
       800: "#f9e9b1",
       900: "#fcf4d8",
   },
   
})
})

//setting

export const themeSettings= (mode:string) =>{
    const colors = colorMode(mode);
    return {
        palette:{
            mode:mode as PaletteMode,
            ...(mode === "dark"
            ?{
                primary:{
                    main:colors.green[400],
                },
                secondary :{
                    main:colors.indigo[500],
                },
                neutral:{
                    dark:colors.grey[700],
                    main :colors.grey[500],
                    light:colors.grey[100]
                },
                background:{
                    default:colors.black[500]
                }
            }:{
                primary:{
                    main:colors.green[400],
                },
                secondary :{
                    main:colors.indigo[500],
                },
                neutral:{
                    dark:colors.grey[700],
                    main :colors.grey[500],
                    light:colors.grey[100]
                },
                background:{
                    default:colors.grey[500]
                }
            })
        }
    }
}

export const colorModeContext= createContext({
    toggleColorMode : ()=> {}
})

export const useMode = () =>{
    const [mode, setMode]= useState("dark");
    const colorChangeMode = useMemo(() =>({
        toggleColorMode:()=>
        setMode((prev)=>(prev === 'light' ? "dark": "light"))
    }),[]
    );

    const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
        return [theme, colorChangeMode] 
}

