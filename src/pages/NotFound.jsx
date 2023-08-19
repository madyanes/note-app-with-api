import { useContext } from 'react'
import LocaleContext from '../contexts/LocaleContext'

const NotFound = () => {
  const { getTextLocale } = useContext(LocaleContext)

  return (
    <h1>{getTextLocale('Not Found', 'Tidak Ditemukan')}</h1>
  )
}

export default NotFound
