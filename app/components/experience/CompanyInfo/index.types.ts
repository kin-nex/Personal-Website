import { ReactNode } from 'react'
import {
  CompanySize,
  JobID,
  Technology,
} from '~/components/experience/ExperienceUtils'

export interface CompanyInfo {
  id: JobID
  logoUrl: string
  logoClassName?: string
  companyName: string
  companyUrl: string
  team?: string
  companySize: CompanySize
  role: string
  tenure: number // In months
  tenureDates: string
  linkedInUrl: string
  description: ReactNode
  technologies: Technology[]
}
