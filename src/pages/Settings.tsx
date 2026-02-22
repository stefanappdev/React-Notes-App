import { useState } from 'react';
import '../../styles/TailwindStyles.css';
import settingsStyles from  '../../styles/pageStyles/settings.module.css'
import { UseTheme } from '../contexts/themeContext.tsx';
function Settings() {

  const {isDark,setDarkMode,setLightMode}=UseTheme();


  const turnOff=()=>{
    setLightMode()
  }
  
const turnOn=()=>{
  setDarkMode()
}

  type sliderProps={
     turnOn:()=>void,
     turnOff:()=>void,
     isDark:boolean
  }

  
 
    
    
  const Slider=({turnOn,turnOff,isDark}:sliderProps)=>{
        
        const[sliderOn,setSliderOn]=useState(false);

  return(<>
      
            <div className={`${settingsStyles['settings-window-option']} inline-flex items-center justify-center`}>
            <span className='text-md font-bold'>Dark mode</span>

           <img alt='toggle themes'  
            src={isDark?'../../images/icon-slider-on.png':'../../images/icon-slider-off.png'}
            onClick={isDark?turnOff:turnOn}/>
           

          
            
            
            
                
        </div>
        
      
      </>)
    }


  return (
    <div className='maincontent'>
      
      <h1 className={`text-xl font-bold`}>Settings</h1>
      <br/>
      
      <div className={ 

        !isDark?`${settingsStyles['settings-window']}   
        flex flex-col 
        shadow-lg 
        border-collapse border-1 
        border-slate-400 
        text-slate-950 bg-slate-50 
        rounded-sm  
        items-center 
        justify-center `:

        `${settingsStyles['settings-window']}   
        flex flex-col 
        shadow-lg 
        border-collapse border-1 
        border-slate-400 
        text-slate-50 bg-slate-950 
        rounded-sm  
        items-center 
        justify-center `
      }>
          
        <Slider 
        turnOff={turnOff}
        turnOn={turnOn}
        isDark={isDark}
        />
      
      </div>
      
    

      </div>
  )
}

export default Settings