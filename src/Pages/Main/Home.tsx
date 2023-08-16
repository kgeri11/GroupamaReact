import React from 'react'
import style from './home.module.scss'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'

const Home = (): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Navbar />
      </div>
      <div className={style.content}>
        <div className={style.userData}>
          <div className='card'>
            <div className='card-header'>
              <div className={style.title}>Folyamatos Díjfizetésű Ultra Prémium Életbiztosítás</div>
            </div>
            <div className='card-body'>
              <div className={style.wrapper}>
                <div className={style.title}>Szerződő neve</div>
                <div className={style.data}>Kovács istván</div>
              </div>
              <div className={style.wrapper}>
                <div className={style.title}>Szerződésszám</div>
                <div className={style.data}>87562443</div>
              </div>
              <div className={style.wrapper}>
                <div className={style.title}>Utolsó befizetés</div>
                <div className={style.data}>2019. 06. 25.</div>
              </div>
              <div className={style.wrapper}>
                <div className={style.title}>Biztosítási díj rendezve</div>
                <div className={style.data}>2019. 07. 01.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.payments}>
          <div className={style.options}>
            <div
              id='tab1'
              className={style.tab}
            >
              Fizetendő tételek
            </div>
            <div
              id='tab2'
              className={style.tab}
            >
              Eseti díj befizetése
            </div>
            <div
              id='tab3'
              className={style.tab}
            >
              Fizetési előzmények
            </div>
          </div>
          <div className={style.paymentContainer}>
            <div className={style.titles}>
              <div className={style.id}>Azonosító</div>
              <div className={style.mode}>Befizetés módja</div>
              <div className={style.date}>Dátum</div>
              <div className={style.value}>Összeg</div>
              <div className={style.status}>Státusz</div>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
