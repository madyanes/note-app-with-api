import { useContext } from 'react'
import { SiGoogletranslate } from 'react-icons/si'
import LocaleContext from '../contexts/LocaleContext'

const SwitchLocale = () => {
  const switchLocale = useContext(LocaleContext)

  return (
    <div onClick={switchLocale}>
      <SiGoogletranslate />
    </div>
  )
}

export default SwitchLocale
