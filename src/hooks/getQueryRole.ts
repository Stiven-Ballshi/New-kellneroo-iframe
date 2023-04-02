import { useEffect, useState } from 'react'

import { NextRouter, useRouter } from 'next/router'

export const values = ['owner', 'waitress']

export type PositionTypes = 'owner' | 'waitress' | undefined

export const getQueryValue = (router: NextRouter): PositionTypes => {
  const urlQuery = router.query.search
  let selectedValue: any = values[0]

  if (urlQuery && values.includes(urlQuery as string)) {
    selectedValue = urlQuery
  }

  if (router.asPath.includes('search=')) {
    const test = router.asPath.split('search=')[1]

    if (values.includes(test)) {
      selectedValue = test
    }
  }

  return selectedValue
}

export const GetQueryRole = (): PositionTypes => {
  const router = useRouter()

  const [selectedRole, setSelectedRole] = useState<PositionTypes>(() =>
    getQueryValue(router)
  )

  useEffect(() => {
    setSelectedRole(getQueryValue(router))
  }, [router])

  return selectedRole
}
