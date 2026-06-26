import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Linkedin } from 'lucide-react'
import { TechnologyBadge } from '~/components/experience/TechnologyBadge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { CompanyInfo } from './CompanyInfo/index.types'

export const ExperienceInfo = ({
  logoUrl,
  logoClassName,
  companyName,
  companyUrl,
  team,
  companySize,
  tenureDates,
  linkedInUrl,
  technologies,
}: Omit<CompanyInfo, 'role' | 'description'>) => (
  <Card className="h-min">
    <CardHeader>
      <CardTitle className="flex flex-row items-start justify-between">
        <div className="space-y-2">
          <div className="flex flex-row space-x-2">
            <img
              src={logoUrl}
              alt={`${companyName} logo`}
              className={`h-6 w-6 rounded-sm object-contain ${logoClassName ?? ''}`}
            />
            <Link
              to={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4"
            >
              {companyName}
            </Link>
          </div>
          {team && (
            <span className="text-lg text-muted-foreground">{team}</span>
          )}
        </div>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <Linkedin className="opacity-50 hover:opacity-100" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{`${companyName}'s LinkedIn`}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardTitle>
      <CardDescription>{`${companySize} employees`}</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col space-y-4">
      <span className="text-lg font-extrabold text-card-foreground">
        {tenureDates}
      </span>
      <div className="flex flex-row flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechnologyBadge key={tech} technology={tech} />
        ))}
      </div>
    </CardContent>
  </Card>
)
