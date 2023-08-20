import { useContext } from 'react'
import LocaleContext from '../contexts/LocaleContext'

const NotFound = () => {
  const { getTextLocale } = useContext(LocaleContext)

  return (
    <h1>{getTextLocale('Page Not Found', 'Laman Tidak Ditemukan')}</h1>
  )
}

export default NotFound
