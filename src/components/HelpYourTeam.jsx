import React from 'react'

function HelpYourTeam() {
  const cards = [
    {
      title: 'For developers',
      image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp',
      features: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
      link: 'https://adapty.io/for-developers/'
    },
    {
      title: 'For app owners',
      image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp',
      features: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
      link: 'https://adapty.io/for-app-owners/'
    },
    {
      title: 'For marketers',
      image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp',
      features: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
      link: 'https://adapty.io/for-marketers/'
    }
  ]

  return (
    <section className="help-your-team">
      <div className="container">
        <h2 className="section-title">
          Help your team run the mobile subscription business. <br />
          Faster and cheaper.
        </h2>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <a key={index} href={card.link} className="feature-card">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-header">
                <span className="card-label">{card.title}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#FF006B"/>
                </svg>
              </div>
              <div className="card-content">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">{feature}</div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HelpYourTeam

