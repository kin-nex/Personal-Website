import { Link } from 'react-router';
import { CompanyInfo } from './index.types'

const description = (
  <>
    <p>
      Planned and architected the code to simulate a real-world environment
      whereby a swarm of UxVs have the goal of maintaining maximum connectivity
      as they move from point A to point B. This simulation was created in
      Python and presented using{' '}
      <Link
        to="https://docs.python.org/3/library/turtle.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Turtle graphics
      </Link>
      .
    </p>
    <p>
      Follow-up analysis of the application involved documenting research papers
      used for explaining algorithm choice as well as performance statistics of
      overall connectivity as well as number of collisions in a single journey -
      this work was then presented to stakeholders in an attempt for PA
      Consulting to win contract work.
    </p>
  </>
)

export const PAConsulting: CompanyInfo = {
  id: 'PAConsulting',
  logoUrl:
    'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/g7kehgw0juzhhw2rcwtt',
  companyName: 'PA Consulting',
  companyUrl: 'https://www.paconsulting.com/',
  companySize: '1001 - 5000',
  role: 'Backend Engineer - Internship',
  tenure: 3,
  tenureDates: 'Jul 2017 - Sep 2017',
  linkedInUrl: 'https://www.linkedin.com/company/pa-consulting/',
  technologies: ['Python'],
  description,
}
