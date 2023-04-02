import Image from 'next/image'
import React, { ReactNode } from 'react'

import { Tooltip } from '@mui/material'

import {
  CoffieIcon,
  MoonIcon,
  SunIcon,
  ClockIcon,
  EuroIcon,
  PizzaIcon,
  PictureIcon,
} from '../CustomIcons'

import styles from '../heroSearchSection/searchCard.module.scss'

export type Props = {
  title: string
  image: string
  isNew?: boolean
  status?: string
  icons: ('coffe' | 'sun' | 'moon')[]
  job?: {
    price?: number
    perWeek?: number
    perHour: number
    benefits: string[]
  }
  personel?: {
    employment: string[]
  }
}

const Card = ({ title, icons, image, personel, job }: Props) => {
  const iconsList = (() => {
    const iconsData: ReactNode[] = []

    icons.forEach((icon) => {
      switch (icon) {
        case 'coffe':
          iconsData.push(<CoffieIcon className="z-[1000000]" />)
          break

        case 'sun':
          iconsData.push(<SunIcon className="z-[1000000]" />)
          break

        case 'moon':
          iconsData.push(<MoonIcon className="z-[1000000]" />)
          break
      }
    })

    return iconsData
  })()

  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        {image.trim().length === 0 ? (
          <div className={styles.card__empty}>
            <PictureIcon />
          </div>
        ) : (
          <>
            <div className={styles.break}></div>

            <Image
              className={styles.image__div}
              src={image}
              alt="Picture of the author"
              unoptimized
              fill
            />
          </>
        )}

        <span className={styles.card__left__user_icons}>{iconsList}</span>
      </div>

      <div className={styles.card__right}>
        <div className={styles.card__right__upper}>
          <div className={styles.card__right__header}>
            <h3 className={styles.card__right__name}>{title}</h3>
            <div className={styles.card__right__availability}>
              <p className={styles.available}>Verfügbar</p>
            </div>
          </div>

          {job && (
            <div className={styles.job__details}>
              <div className={styles.per__week}>
                <ClockIcon />
                {job.perWeek ?? '16'} Std / Woche
              </div>
              <div className={styles.wage}>
                <EuroIcon />
                min {job.perHour}€ / h
              </div>
              {job.benefits.length > 0 && (
                <div className={styles.benefits}>
                  <div className={styles.main__benefits}>
                    <PizzaIcon /> {job.benefits[0]}
                  </div>

                  {job.benefits.length > 0 && (
                    <div className={styles.benefits}>
                      {job.benefits.length > 1 && (
                        <Tooltip
                          arrow
                          placement="top"
                          title={
                            <ul className={styles.more__benefits}>
                              {job.benefits.slice(1).map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          }
                        >
                          <div className={styles.other__benefits}>
                            +{job.benefits.length - 1} mehr
                          </div>
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {personel && (
            <div className={styles.card__right__jobPositions}>
              {personel.employment.map((item, idx) => {
                if (idx > 2) return null

                return (
                  <p key={idx} className={styles.card__right__jobType}>
                    <ClockIcon />
                    {item}
                  </p>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
