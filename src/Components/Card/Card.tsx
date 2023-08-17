import React, { useState } from 'react'
import style from './card.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import BootstrapCard from 'react-bootstrap/Card'
import { CardProps } from './Card.types'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import ArrowDown from '../../../public/assets/arrowDown.svg'
import Attachment from '../../../public/assets/attachment.svg'
import Pdf from '../../../public/assets/pdf.png'
import Download from '../../../public/assets/download.svg'

const Card = ({ dotColor = 'grey', id }: CardProps): JSX.Element => {
  const [isHide, setisHide] = useState<boolean>(true)

  const handleHide = (): void => {
    setisHide((isHide) => !isHide)
  }
  // @ts-expect-error: used any
  function CustomToggle ({ eventKey }): any {
    const decoratedOnClick = useAccordionButton(eventKey)

    return (
      <button
        type='button'
        onClick={decoratedOnClick}
      >
        <img
          src={ArrowDown}
          alt='arrowDown'
        />
      </button>
    )
  }
  return (
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
                src={Attachment}
                alt='attachment'
              />
            </div>
          </div>
          <CustomToggle eventKey={id}></CustomToggle>
        </div>
        <div className={style.desktopStatus}>
          <div className={style.id}>
            <button onClick={handleHide}>
              <img
                src='assets/arrowRight.svg'
                alt='arrowDown'
              />
            </button>
            <div className={[style.text, style.cardNormal, isHide ? style.nowrap : style.breakSpace].join(' ')}>
              EPAYMT8THS4GFDG
            </div>
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
            src={Attachment}
            alt='attachment'
          />
          <CustomToggle eventKey={id}></CustomToggle>
        </div>
      </BootstrapCard.Header>
      <Accordion.Collapse eventKey={id}>
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
                  src={Pdf}
                  alt='pdf'
                />
                <div className={style.cardNormal}>Fizetési nyugta letöltése</div>
              </div>
            </div>
          </div>
          <div className={style.infoMobile}>
            <div className={style.status}>
              <div className={style.mobileLittle}>Státusz</div>
              <div className={style.mobileNormal}>Folyamatban</div>
            </div>
            <div className={style.id}>
              <div className={style.mobileLittle}>Azonosító</div>
              <div className={style.mobileNormal}>12345678</div>
            </div>
            <div className={style.payMethod}>
              <div className={style.mobileLittle}>Hogyan</div>
              <div className={style.mobileNormal}>Bankkártya</div>
            </div>
          </div>
          <div className={style.receiptMobile}>
            <div className={[style.title, style.mobileLittle].join(' ')}>Csatolmány</div>
            <div className={style.receipts}>
              <div className={style.receiptItems}>
                <img
                  src={Pdf}
                  alt='pdf'
                />
                <div className={style.mobileNormal}>Fizetési nyugta letöltése</div>
              </div>
              <div>
                <img
                  src={Download}
                  alt='download'
                />
              </div>
            </div>
          </div>
          <div className={style.feesMobile}>
            <div className={style.period}>
              <div className={style.mobileLittle}>Időszak</div>
              <div className={style.mobileNormal}>2019. 11. 20- 2020. 11. 19</div>
            </div>
            <div className={style.fees}>
              <div>
                <div className={style.mobileLittle}>Díjelőírás</div>
                <div className={style.mobileNormal}>5 000 Ft</div>
              </div>
              <div className={style.accounted}>
                <div className={style.mobileLittle}>Könyvelt díj</div>
                <div className={style.mobileNormalBold}>5 000 Ft</div>
              </div>
            </div>
          </div>
          <div className={style.feesMobile}>
            <div className={style.period}>
              <div className={style.mobileLittle}>Időszak</div>
              <div className={style.mobileNormal}>2019. 11. 20- 2020. 11. 19</div>
            </div>
            <div className={style.fees}>
              <div>
                <div className={style.mobileLittle}>Díjelőírás</div>
                <div className={style.mobileNormal}>7 500 Ft</div>
              </div>
              <div className={style.accounted}>
                <div className={style.mobileLittle}>Könyvelt díj</div>
                <div className={style.mobileNormalBold}>7 500 Ft</div>
              </div>
            </div>
          </div>
        </BootstrapCard.Body>
      </Accordion.Collapse>
    </BootstrapCard>
  )
}

export default Card
