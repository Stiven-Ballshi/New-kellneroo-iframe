import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import classNames from 'classnames'

import CancelIcon from '@mui/icons-material/Cancel'

import { GetQueryRole } from '../../hooks/getQueryRole'

import Card, { Props as CardProps } from './Card'

import { IconButton } from '@mui/material'

import styles from './searchCard.module.scss'
import { Trans, useTranslation } from 'react-i18next'

type Props = {
  data: CardProps[]
  loading: boolean
  className?: string
  value: string
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchBox = ({
  data,
  loading,
  className,
  value,
  setVisibleModal,
}: Props) => {
  const selectedRole = GetQueryRole()

  const isPersonnel = selectedRole === 'waitress'

  const { t } = useTranslation('header')

  const theme = isPersonnel ? '#577E8F' : '#393236'

  return (
    <div
      style={{
        background: theme,
      }}
      className={classNames(styles.search__results, className)}
    >
      <IconButton
        className={styles.modal__close_button}
        onClick={() => setVisibleModal(false)}
      >
        <CancelIcon />
      </IconButton>
      <h6 className={styles.search__results__title}>
        {selectedRole === 'waitress' ? (
          <Trans
            t={t}
            i18nKey="search-user-text-waitress" // optional -> fallbacks to defaults if not provided
            values={{ city: `${value.trim().length > 0 ? value : 'München'}` }}
          />
        ) : (
          <Trans
            t={t}
            i18nKey="search-user-text-waitress" // optional -> fallbacks to defaults if not provided
            values={{ city: `${value.trim().length > 0 ? value : 'München'}` }}
          />
        )}
      </h6>

      <div
        className={classNames(styles.card__container, {
          [styles.card__container__noData]: data.length === 0,
        })}
      >
        {loading && (
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        )}

        {!loading &&
          data.length > 0 &&
          data.map((item, idx) => <Card key={idx} {...item} />)}

        {!loading && data.length === 0 && (
          <h3 className={styles.empty}>No Data</h3>
        )}
      </div>
    </div>
  )
}

export default SearchBox
