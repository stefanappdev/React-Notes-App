import { useState } from 'react';
import '../../styles/TailwindStyles.css';
import settingsStyles from  '../../styles/pageStyles/settings.module.css'
import { UseTheme } from '../contexts/themeContext.tsx';
function Settings() {

  const {isDark,setLightMode,setDarkMode}=UseTheme();
  const [sliderOn,setSliderOn]=useState(false);


  type sliderProps={
     turnOn:()=>void,
     turnOff:()=>void
     sliderOn:boolean
  }

     const turnOff=()=>{
      setSliderOn(false)

     }

     const turnOn=()=>{
      setSliderOn(true)
     }

    
    if(sliderOn){
      setDarkMode()
    }else{
      setLightMode()
    }

     

  
  const Slider=({turnOff,turnOn,sliderOn}:sliderProps)=>{
       
return(<>
    
          <div className={`${settingsStyles['settings-window-option']} inline-flex items-center justify-center`}>
          <span className='text-md font-bold'>Dark mode</span>

          <img alt='toggle themes'  
          src={!sliderOn?'./../images/icon-slider-off.png':'./../images/icon-slider-on.png'}
          onClick={!sliderOn?turnOn:turnOff}
          />
          
              
      </div>
      
     
    </>)
  }


  return (
    <div className='maincontent'>
      
      <h1 className={`text-xl font-bold`}>Settings</h1>
      <br/>
      
      <div className={ 

        isDark?`${settingsStyles['settings-window']}   
        flex flex-col 
        shadow-lg 
        border-collapse border-1 
        border-slate-400 
        text-slate-50 bg-slate-950 
        rounded-sm  
        items-center 
        justify-center `:
        `${settingsStyles['settings-window']}   
        flex flex-col 
        shadow-lg 
        border-collapse border-1 
        border-slate-400  
        rounded-sm  
        items-center 
        justify-center`

      }>
          
        <Slider 
        turnOn={turnOn} 
        turnOff={turnOff}
        sliderOn={sliderOn}
        />
      
      </div>
      
    

      </div>
  )
}

export default Settings