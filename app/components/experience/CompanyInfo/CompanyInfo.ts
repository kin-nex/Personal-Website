import { CompanySize, Technology } from "~/components/experience/ExperienceUtils"

export interface CompanyInfo {
    logoUrl: string
    companyName: string
    companyUrl: string
    team?: string
    companySize: CompanySize
    role: string
    tenure: number // In months
    description: string
    linkedInUrl: string
    technologies: Technology[]
}