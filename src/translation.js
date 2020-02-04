import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from "./languages/en"
import italian from "./languages/it"

//resources
const resources = {
    en: english,
    it: italian
}

//configuration
i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en"
    })

export default i18n