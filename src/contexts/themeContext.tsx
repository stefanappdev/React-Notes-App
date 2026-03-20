import React, { useState,useContext,createContext} from "react";


interface themeContext{
isDark:boolean,
setLightMode:()=>void,
setDarkMode:()=>void
}

const appThemeContext:themeContext={
    isDark:false,
    setLightMode:():void=>{},
    setDarkMode:():void=>{},
    
}


const themeContext=createContext(appThemeContext)

type props={
    children?:React.ReactNode
}


const ThemeContextProvider=({children}:props)=>{

const [isDark,setisDark]=useState(false);

const setLightMode=()=>{
    setisDark(false)
}

const setDarkMode=()=>{
    setisDark(true)
}
const providerValues={
    setDarkMode:setDarkMode,
    setLightMode:setLightMode,
    isDark:isDark,
}


return <themeContext.Provider value={providerValues}>
    {children}
</themeContext.Provider>


}

const UseTheme=()=>{return useContext(themeContext)};

export{UseTheme,ThemeContextProvider}
