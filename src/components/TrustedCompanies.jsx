import React from 'react'

function TrustedCompanies() {
  const companies = [
    { name: 'Feeld', logo: 'https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg' },
    { name: 'Bumble', logo: 'https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg' },
    { name: 'Weewoo', logo: 'https://adapty.io/assets/uploads/2025/02/weewoo.svg' },
    { name: 'AppNation', logo: 'https://adapty.io/assets/uploads/2025/02/AppNation.webp' },
    { name: 'Almus', logo: 'https://adapty.io/assets/uploads/2025/02/almus.svg' },
    { name: 'Impala Studios', logo: 'https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg' },
    { name: 'HUBX', logo: 'https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg' }
  ]

  return (
    <section className="trusted-companies">
      <div className="container">
        <h2 className="section-title trusted-companies-title">
          Trusted by 15,000+ apps and the world's largest app publishers
        </h2>
        <div className="companies-flex">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedCompanies

