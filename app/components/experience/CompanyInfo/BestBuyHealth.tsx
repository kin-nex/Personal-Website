import { CompanyInfo } from './index.types'

const description = (
  <>
    <p>
      Applied for a front-end role and ended up being a back-end engineer. Best
      Buy Health was transitioning from catering to the UK market to supporting
      US healthcare providers. Trump ended up having a pretty strong position on
      US healthcare however, and in the end Best Buy Health ceased operations in
      the UK, laid off about 80% of the workforce, and was sold back to its
      original owners.
    </p>
    <p>
      In the time at Best Buy Health I contributed to platform upgrades from
      Java 8 to Java 21 and Spring Boot 2 to Spring Boot 3. I was on the on-call
      rota and had the opportunity to architect and document a delivery-receipt
      tracking workflow to support customer communications and better diagnose
      and react to support-related incidents.
    </p>
  </>
)

export const BestBuyHealth: CompanyInfo = {
  id: 'BestBuyHealth',
  logoUrl:
    'https://corporate.bestbuy.com/wp-content/uploads/2023/01/BestBuyHealth_Logo.png',
  logoClassName: 'bg-white p-0.5',
  companyName: 'Best Buy Health',
  companyUrl: 'https://www.bestbuyhealth.com/',
  companySize: '1001 - 5000',
  role: 'Senior Software Engineer',
  tenure: 8,
  tenureDates: 'Nov 2024 - Jun 2025',
  linkedInUrl: 'https://www.linkedin.com/company/best-buy-health/',
  technologies: ['Java', 'TypeScript', 'Spring Boot'],
  description,
}
