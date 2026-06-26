import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ReactNode } from 'react'

interface Props {
  role: string
  description: ReactNode
}

export const ExperienceDescription = ({ role, description }: Props) => (
  <Card>
    <CardHeader>
      <CardTitle>{role}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 whitespace-pre-wrap text-slate-300">
      {description}
    </CardContent>
  </Card>
)
