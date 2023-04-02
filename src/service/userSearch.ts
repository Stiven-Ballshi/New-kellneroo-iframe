import axios from 'axios'
import { WaitressData } from '../types/service/waitressSearch'

export const getWaitress = async () => {
  const waitressAPI =
    'https://kellneroobackend-ni2fj6r2da-ey.a.run.app/public/waiters?city=Munich'

  try {
    const response: { data: WaitressData } = await axios.get(waitressAPI, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    // console.log(error)
  }
}
