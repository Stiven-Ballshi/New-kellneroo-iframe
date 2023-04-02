import axios, { AxiosResponse } from 'axios'

type GetWaitressJobsResponseItem = {
  benefits: string[]
  created_at: string
  description: string
  distance: number
  edges: {
    caterer: {
      city: string
      company_name: string
      contact_person_firstname: string
      contact_person_surname: string
      created_at: string
      description: string
      house_number: string
      id: string
      last_online: number
      location_lat: number
      location_lng: number
      phone: string
      profile_picture_url: string
      registration_finished: string
      registration_step: string
      state: string
      street: string
      updated_at: string
      zip_code: string
    }
  }
  education?: string | number
  enabled: boolean
  hourly_rate: number
  hours_per_week?: number
  id: string
  picture_urls: string[]
  qualifications: number
  starting?: string
  title: string
  types: number
  updated_at: string
  weekly_timetable: number
  work_clothes?: string
  work_experience?: string
}

export const getWaitressJobs = async ({ city }: { city: string }) => {
  const url = `https://kellneroobackend-ni2fj6r2da-ey.a.run.app/public/jobs?city=${city}`

  try {
    const response: AxiosResponse<GetWaitressJobsResponseItem[]> =
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

    return response.data
  } catch (error) {
    // console.log(error)
  }
}

type GetPersonnelJobsResponseItem = {
  age: number
  available_after: string
  birthday?: string
  created_at: string
  description_tags: string[]
  desired_hourly_rate: number
  distance: number
  education: string[]
  experience: string[]
  firstname: string
  hours_per_week?: number
  id: string
  languages: string[]
  last_online: number
  preferred_job_types: number
  profile_picture_url: string
  qualifications: number
  registration_finished: string
  registration_step: string
  search_location_lat: number
  search_location_lng: number
  search_radius: number
  status: string
  updated_at: string
  weekly_timetable_preferences: number
  work_experience: number
}

export const getPersonnel = async ({ city }: { city: string }) => {
  const url = `https://kellneroobackend-ni2fj6r2da-ey.a.run.app/public/waiters?city=${city}`

  try {
    const response: AxiosResponse<GetPersonnelJobsResponseItem[]> =
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

    return response.data
  } catch (error) {
    // console.log(error)
  }
}
