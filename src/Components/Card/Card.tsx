import React from 'react'
import style from './card.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import BootstrapCard from 'react-bootstrap/Card'
import { CardProps } from './Card.types'

const Card = ({ dotColor = 'grey' }: CardProps): JSX.Element => {
  return (
    <Accordion defaultActiveKey='0'>
      <BootstrapCard className={style.card}>
        <BootstrapCard.Header className={style.cardHeader}>
          <div className={style.mobileStatus}>
            <div className={style.container}>
              <div className={style.dataContainer}>
                <div className={[style.statusLight, style[dotColor]].join(' ')}></div>
                <div className={style.data}>
                  <div className={style.mobileLittle}>Folyamatban</div>
                  <div className={style.mobileBigBold}>5 000 Ft</div>
                  <div className={style.mobileLittle}>Fizetési dátum: 2019. 06. 22.</div>
                </div>
              </div>
              <div className={style.attachment}>
                <img
                  src='assets/attachment.svg'
                  alt='attachment'
                />
              </div>
            </div>
            <img
              src='assets/arrowDown.svg'
              alt='arrowDown'
            />
          </div>
          <div className={style.desktopStatus}>
            <div className={style.id}>
              <button className='btn btn-link'>
                <img
                  src='assets/arrowRight.svg'
                  alt='arrowDown'
                />
              </button>
              <div className={[style.text, style.cardNormal].join(' ')}>EPAYMT8THS4GFDG</div>
            </div>
            <div className={[style.payMethod, style.cardCapitalized].join(' ')}>Bankkártya</div>
            <div className={[style.date, style.cardNormal].join(' ')}>2019. 06. 25</div>
            <div className={[style.value, style.cardHeaderBigBold].join(' ')}>5 000 Ft</div>
            <div className={style.status}>
              <div className={[style.statusLight, style[dotColor]].join(' ')}></div>
              <div className={style.cardCapitalized}>Folyamatban</div>
            </div>
            <img
              className={style.attachment}
              src='assets/attachment.svg'
              alt='attachment'
            />
            <button
              className='btn btn-link'
              data-toggle='collapse'
              data-target='#firstBody'
              aria-expanded='true'
              aria-controls='firstBody'
            >
              <img
                src='assets/arrowDown.svg'
                alt='arrowDown'
              />
            </button>
          </div>
        </BootstrapCard.Header>
        <Accordion.Collapse eventKey='0'>
          <BootstrapCard.Body className={style.cardBody}>
            <div className={style.info}>
              <div className={style.period}>
                <div className={[style.title, style.columnHeaderTitle].join(' ')}>Biztosítási időszak</div>
                <div className={style.cardBodyBig}>2019. 06. 02 - 07. 01.</div>
              </div>
              <div className={style.fees}>
                <div className={style.fee}>
                  <div className={[style.title, style.columnHeaderTitle].join(' ')}>Díjelőírás</div>
                  <div className={style.cardBodyBig}>5 000 Ft</div>
                </div>
                <div className={style.accounted}>
                  <div className={[style.title, style.columnHeaderTitle].join(' ')}>Könyvelt díj</div>
                  <div className={style.cardHeaderBigBold}>5 000 Ft</div>
                </div>
              </div>
            </div>
            <div className={style.receipt}>
              <div className={style.downloads}>
                <div className={[style.title, style.columnHeaderTitle].join(' ')}>Csatolmány</div>
                <div className={style.receipts}>
                  <img
                    src='assets/pdf.png'
                    alt='pdf'
                  />
                  <div className={style.cardNormal}>Fizetési nyugta letöltése</div>
                </div>
              </div>
            </div>
          </BootstrapCard.Body>
        </Accordion.Collapse>
      </BootstrapCard>
    </Accordion>
  )
}

export default Card
