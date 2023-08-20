import { useContext } from 'react'
import LocaleContext from '../contexts/LocaleContext'

const NotFound = () => {
  const { getTextLocale } = useContext(LocaleContext)

  return (
    <p>{getTextLocale('Page Not Found', 'Laman Tidak Ditemukan')}</p>
  )
}

export default NotFound
