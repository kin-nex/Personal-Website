import { EXPERIENCE } from '~/routes/experience'
import { ExperienceInfo } from '~/components/experience/ExperienceInfo'
import { ExperienceDescription } from '~/components/experience/ExperienceDescription'
import { JobID } from '~/components/experience/ExperienceUtils'
import { useAnimatedSelection } from '~/components/experience/useAnimatedSelection'

interface Props {
  experience: JobID | undefined
}

export const CompanyExperience = ({ experience }: Props) => {
  const { rendered, isVisible } = useAnimatedSelection(experience)
  const experienceInfo = rendered && EXPERIENCE[rendered]

  return (
    <div
      className={`space-y-4 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 lg:pt-[10vh]' : 'pt-0 opacity-0'
      }`}
    >
      {experienceInfo && (
        <div className="flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="lg:w-1/2">
            <ExperienceInfo {...experienceInfo} />
          </div>
          <div className="lg:w-1/2">
            <ExperienceDescription
              role={experienceInfo.role}
              description={experienceInfo.description}
            />
          </div>
        </div>
      )}
    </div>
  )
}
