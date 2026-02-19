import '../../styles/TailwindStyles.css';
import settingsStyles from  '../../styles/pageStyles/settings.module.css'

function Settings() {

  return (
    <div className='maincontent'>
      
      <h1 className={`text-xl font-bold`}>Settings</h1>
      <br/>

      <div className={`${settingsStyles['settings-window']}  flex flex-col shadow-lg border-collapse border-1 border-slate-400  rounded-sm  items-center justify-center `}>
        
        <div className={`${settingsStyles['settings-window-option']} inline-flex items-center justify-center`}>
          <span className='text-md font-bold'>Dark mode</span>
          <img alt='toggle themes' src='../../images/icon-slider-off.png'/>
        </div>

      </div>
    </div>
  )
}

export default Settings