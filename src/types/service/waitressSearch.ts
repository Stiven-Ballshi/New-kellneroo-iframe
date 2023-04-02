export interface WaitressData {
  id: string
  firstname: string
  search_radius: number
  desired_hourly_rate: number
  age: number
  preferred_job_types: number
  qualifications: number
  weekly_timetable_preferences: number
  hours_per_week: number
  available_after?: Date
  search_location_lat: number
  search_location_lng: number
  work_experience: number
  experience: string[]
  education: string[]
  description_tags: string[]
  languages: string[]
  birthday?: any
  registration_step: string
  last_online: number
  profile_picture_url: string
  status: string
  created_at: Date
  updated_at: Date
  registration_finished: Date
}
