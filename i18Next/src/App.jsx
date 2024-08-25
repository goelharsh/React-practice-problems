import './App.css'
import { Trans, useTranslation } from 'react-i18next'
import LanguageSelector from './components/languageSelector'

function App() {

  const {t} = useTranslation()

  // 1st use case  
  // const {line1, line2} = t("description")

  // 2nd use case  
  // const {line1, line2} = t("description", {
  //   channel :"XYZ"
  // })

  // 3rd use case if we wan to make out text stlyed 
  const line1 = t("description.line1");
  const line2 = t("description.line2");

  return (
    <div className='container'>
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
    <span>
    <Trans
        i18nKey="description.line1"
        values={{ channel: "Harsh" }}
        components={{ 1: <b /> }}
      />
    </span>
      <p>{line1}</p>
      <span>{line2}</span>
    </div>
  )
}

export default App
