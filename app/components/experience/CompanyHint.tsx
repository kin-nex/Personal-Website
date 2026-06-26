import { JobID } from '~/components/experience/ExperienceUtils'
import { EXPERIENCE } from '~/routes/experience'
import { useAnimatedSelection } from '~/components/experience/useAnimatedSelection'

const prettifyTenure = (tenure: number): string => {
  if (tenure < 12) return `${tenure} ${tenure === 1 ? 'month' : 'months'}`
  const years = Math.floor(tenure / 12)
  const months = tenure % 12
  return `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${
    months === 1 ? 'month' : 'months'
  }`
}

interface Props {
  experience: JobID | undefined
}

export const CompanyHint = ({ experience }: Props) => {
  const { rendered, isVisible } = useAnimatedSelection(experience, 300, true)
  const experienceInfo = rendered && EXPERIENCE[rendered]

  return (
    <div className="flex h-8 flex-row items-center space-x-2 text-muted-foreground">
      {experienceInfo && (
        <>
          <img
            className={`h-6 w-6 rounded-md object-contain transition-all duration-300 ${
              isVisible ? '' : 'mb-6 opacity-0'
            } ${experienceInfo.logoClassName ?? ''}`}
            src={experienceInfo.logoUrl}
            alt={`${experienceInfo.companyName} logo`}
          />
          <div
            className={`items-end transition-all duration-300 ${
              isVisible ? '' : 'mb-6 opacity-0'
            }`}
          >
            <span className="text-2xl">{experienceInfo.companyName}</span>
            <span> - {prettifyTenure(experienceInfo.tenure)}</span>
          </div>
        </>
      )}
    </div>
  )
}
