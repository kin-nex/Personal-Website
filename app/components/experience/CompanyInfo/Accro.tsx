import { CompanyInfo } from './index.types'

const description = (
  <>
    <p>
      I officially joined Accro part-time in May 2025 while working at Best
      Buy, however only became full-time after being laid off due to the sale
      of the company. I joined as the 3rd employee under 2 co-founders and
      owned building and delivery of the front-end. A truly full throttle
      experience, I worked across the stack both front-end and back-end building
      mostly using agentic development with our own custom delivery skills
      however primarily owning the full-stack FE codebase.
    </p>
    <p>
      Being a product engineer meant joining design partner/customer calls to
      capture feedback and support guiding product direction but more keenly,
      build solid foundational relationships to ensure customers can speak
      honestly and openly and continue to engage with the product.
    </p>
  </>
)

export const Accro: CompanyInfo = {
  id: 'Accro',
  logoUrl: 'https://accro.ai/_assets/v11/4e0ebd9b08785099bd769ebe53212ca604c94a97.svg',
  companyName: 'Accro',
  companyUrl: 'https://accro.ai/',
  companySize: '1 - 10',
  role: 'Founding Engineer',
  tenure: 14,
  tenureDates: 'May 2025 - Present',
  linkedInUrl: 'https://www.linkedin.com/company/accro-ai/',
  technologies: ['TypeScript', 'Go', 'React', 'React Router', 'ShadCN'],
  description,
}
