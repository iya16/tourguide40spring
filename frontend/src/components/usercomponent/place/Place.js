import React, { Component } from 'react'
// import Header from '../header/Header';
// import LanguageSwitcher from '../Language/LanguageSwitcher';
import Layout from '../Layout/Layout';
// import { useTranslation } from "react-i18next";
import { withTranslation } from 'react-i18next';


class Place extends Component {
  render() {
    // const { t } = useTranslation();
    const { t } = this.props;

    return (
      <div>
        <Layout>
        {/* <Header/> */}
        {/* <LanguageSwitcher /> */}

        <p>

        Internationalization is an important step in overcoming the 
        language barrier among people who use a particular software application.
         For example, the application target users may speak different languages and 
         have varying conventions for numbers, dates, or strings.
        </p>
          <p>{t("main.paragraphOne")}</p>
        </Layout>
      </div>
    )
  }
}
export default withTranslation()(Place);
