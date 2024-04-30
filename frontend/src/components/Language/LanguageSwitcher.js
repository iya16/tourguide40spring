// import { Suspense, useState } from "react";
// import { useTranslation } from "react-i18next";

// const locales = {
//   en: { title: "English" },
//   lv: { title: "Latviski" },
//   es: { title: "Español" }
// };

// function LanguageTrans() {
//   const { t, i18n } = useTranslation();

//   const [messages, setMessages] = useState(0);

//   return (
//     <div>
//       <ul>
//         {Object.keys(locales).map((locale) => (
//           <li key={locale}>
//             <button
//               style={{
//                 fontWeight: i18n.resolvedLanguage === locale ? "bold" : "normal"
//               }}
//               type="submit"
//               onClick={() => i18n.changeLanguage(locale)}
//             >
//               {locales[locale].title}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <h1>{t("main.header")}</h1>

//       <button onClick={() => setMessages(messages + 1)}>+1 message</button>
//       <p>{t("main.new_messages", { count: messages })}</p>

//       <p>{t("main.current_date", { date: new Date() })}</p>

//       <p>
//         {t("main.incoming_message", { from: "Ann" })}
//         <br />
//         {t("main.message_contents", {
//           body: "How are you doing?",
//           context: "female"
//         })}
//       </p>
//     </div>
//   );
// }

// export default function LanguageSwitcher() {
//   return (
//     <Suspense fallback="...loading">
//       <LanguageTrans />
//     </Suspense>
//   );
// }



import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import React, { Suspense } from "react"; // Import Suspense from react

const locales = {
  en: { title: "English" },
  lv: { title: "Latviski" },
  es: { title: "Español" }
};

function LanguageTrans() {
  const { t, i18n } = useTranslation();
  // const [messages, setMessages] = useState(0);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select
        value={i18n.resolvedLanguage}
        onChange={handleLanguageChange}
      >
        {Object.keys(locales).map((locale) => (
          <option key={locale} value={locale}>
            {locales[locale].title}
          </option>
        ))}
      </select>
      
    </div>
  );
}

function LanguageSwitcher() {
  return (
    // <Suspense fallback="...loading">
      <LanguageTrans />
    // </Suspense>
  );
}
export default LanguageSwitcher;
