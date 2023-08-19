import { useContext } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import ThemeContext from '../contexts/ThemeContext'

const SwitchTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <div className='btn-switch-theme' onClick={switchTheme}>{theme === 'light' ? <RiMoonFill /> : <RiSunFill />}</div>
  )
}

export default SwitchTheme
