import React from 'react'

function EnterpriseGrade() {
  const features = [
    {
      title: 'Secure',
      items: [
        'SOC2 verified',
        'Encrypted',
        '24/7 global fraud monitoring'
      ]
    },
    {
      title: 'Reliable',
      items: [
        { text: '99.99% SLA', link: 'https://status.adapty.io/' },
        'Over $500M/year of in-app purchases processed'
      ]
    },
    {
      title: 'Responsive',
      items: [
        'Dedicated customer success manager',
        'Direct communication via Slack',
        'Live chat on the website',
        'Four ways to reach us'
      ]
    }
  ]

  return (
    <section className="enterprise-grade">
      <div className="container">
        <h2 className="section-title">Enterprise-grade platform</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-column">
              <h3 className="feature-title">{feature.title}</h3>
              <ul className="feature-list">
                {feature.items.map((item, idx) => (
                  <li key={idx}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.text}
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                          <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="#111111"/>
                        </svg>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnterpriseGrade

