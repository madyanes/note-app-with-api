import { useContext } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import ThemeContext from '../contexts/ThemeContext'

const SwitchTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <div onClick={switchTheme}>{theme === 'light' ? <RiMoonFill className='btn-icons' /> : <RiSunFill className='btn-icons' />}</div>
  )
}

export default SwitchTheme
