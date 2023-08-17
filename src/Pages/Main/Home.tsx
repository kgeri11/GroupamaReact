import React from 'react'
import style from './home.module.scss'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'
import BootstrapCard from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const Home = (): JSX.Element => {
  return (
    <div className={style.contentContainer}>
      <div className={style.header}>
        <Navbar />
      </div>
      <div className={style.content}>
        <div className={style.userData}>
          <BootstrapCard className={style.card}>
            <BootstrapCard.Header className={style.cardHeader}>
              <div className={style.title}>Folyamatos Díjfizetésű Ultra Prémium Életbiztosítás</div>
            </BootstrapCard.Header>
            <BootstrapCard.Body className={style.cardBody}>
              <div className={style.wrapper}>
                <div className={style.userDataNormal}>Szerződő neve</div>
                <div className={style.userDataNormal}>Kovács istván</div>
              </div>
              <div className={style.wrapper}>
                <div className={style.userDataNormal}>Szerződésszám</div>
                <div className={style.userDataNormal}>87562443</div>
              </div>
              <div className={style.wrapper}>
                <div className={style.userDataNormal}>Utolsó befizetés</div>
                <div className={style.userDataNormal}>2019. 06. 25.</div>
              </div>
              <div className={style.wrapper}>
                <div className={style.userDataNormal}>Biztosítási díj rendezve</div>
                <div className={style.userDataNormal}>2019. 07. 01.</div>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </div>
        <div className={style.payments}>
          <div className={style.options}>
            <div
              id='tab1'
              className={[style.tab, style.tabTitle].join(' ')}
            >
              Fizetendő tételek
            </div>
            <div
              id='tab2'
              className={[style.tab, style.tabTitle].join(' ')}
            >
              Eseti díj befizetése
            </div>
            <div
              id='tab3'
              className={[style.tab, style.tabTitle, style.tabTitleActive].join(' ')}
            >
              Fizetési előzmények
            </div>
          </div>
          <div className={style.paymentContainer}>
            <div className={style.titles}>
              <div className={style.userDataNormal}>Azonosító</div>
              <div className={style.userDataNormal}>Befizetés módja</div>
              <div className={style.userDataNormal}>Dátum</div>
              <div className={style.userDataNormal}>Összeg</div>
              <div className={style.userDataNormal}>Státusz</div>
            </div>
            <Accordion>
              <Card id={'0'} />
              <Card
                id='1'
                dotColor='green'
              />
              <Card
                id='2'
                dotColor='red'
              />
              <Card
                id='3'
                dotColor='green'
              />
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
