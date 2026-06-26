import { Link } from 'react-router';
import { CompanyInfo } from './index.types'

const description = (
  <>
    <p>
      I joined Amazon Prime Video Web team as an SDE I and left as an SDE II.
    </p>
    <p>
      My most impacting project was to completely rebuild the Prime Video{' '}
      <Link
        to="https://www.amazon.co.uk/gp/video/settings/watch-history"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch History
      </Link>
      page and introduce a new
      <Link
        to="https://www.amazon.co.uk/gp/video/settings/hidden-history"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hidden Videos
      </Link>
      page. The Watch History page depended on a deprecated service by another
      time and from our metrics was the slowest page under our ownership by a
      large margin. After a complete rewrite and redesign giving customers
      day-by-day visibility as well as episode visibility we reduced load times
      drastically and saw 1000 fold increase in customer traffic.
    </p>
    <p>
      As part of international expansion, Prime Video introduced support for RTL
      languages (specifically Arabic and Hebrew). As part of the
      cross-functional across Web I took part in contributing to the component
      library and improving coding standards to allow for current and future
      support of RTL languages.
    </p>
    <p>
      To advance from SDE I to SDE II, I performed as a consultant engineer -
      reviewing architecture designs and performing code reviews as well as
      partaking in the hiring loop interviewing potential SDE I's.
    </p>
    <p>
      I was also part of the on-call rota dedicated to "operational excellence"
      involving be the POC for diagnosing and fixing software issues in
      production.
    </p>
  </>
)

export const AmazonPVWeb: CompanyInfo = {
  id: 'AmazonPVWeb',
  logoUrl:
    'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/tqx9hehojb7pdfyjdgr8',
  companyName: 'Amazon',
  companyUrl: 'https://www.amazon.co.uk/gp/video/storefront/',
  team: 'Prime Video Web',
  companySize: '10,001+',
  role: 'Full Stack Engineer',
  tenure: 23,
  tenureDates: 'Oct 2019 - Sep 2021',
  linkedInUrl: 'https://www.linkedin.com/company/amazon/',
  technologies: ['Scala', 'Java', 'TypeScript', 'JavaScript', 'React'],
  description,
}
