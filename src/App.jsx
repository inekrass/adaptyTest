import React from 'react'
import Hero from './components/Hero'
import TrustedCompanies from './components/TrustedCompanies'
import HelpYourTeam from './components/HelpYourTeam'
import SLAStats from './components/SLAStats'
import CodeIntegration from './components/CodeIntegration'
import SDKPlatforms from './components/SDKPlatforms'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import EnterpriseGrade from './components/EnterpriseGrade'
import G2Awards from './components/G2Awards'
import CaseStudies from './components/CaseStudies'

function App() {
  return (
    <div className="app">
      <Hero />
      <TrustedCompanies />
      <HelpYourTeam />
      <SLAStats />
      <CodeIntegration />
      <SDKPlatforms />
      <Features />
      <Testimonials />
      <EnterpriseGrade />
      <G2Awards />
      <CaseStudies />
    </div>
  )
}

export default App

