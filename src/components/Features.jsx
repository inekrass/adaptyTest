import React from 'react'

function Features() {
  const features = [
    {
      title: 'Increase subscription revenue without app releases',
      description: 'Manage, target, localize and personalize paywalls without leaving your browser.',
      link: 'https://adapty.io/paywall-ab-testing/',
      linkText: 'Increase app revenue',
      image: 'https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp',
      bgColor: '#276150',
      quote: {
        text: '"Whether it\'s A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success."',
        author: 'Ilgar Tali',
        position: 'Founder & Chief Vision Officer',
        logo: 'https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png',
        avatar: 'https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp'
      }
    },
    {
      title: 'Cut refund rate by 40%',
      description: 'Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.',
      link: 'https://adapty.io/refund-saver/',
      linkText: 'Set up Refund Saver',
      image: 'https://adapty.io/assets/uploads/2025/05/refund-rate@2x-768x576.webp',
      bgColor: '##cfebe3',
      quote: {
        text: '"I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away."',
        author: 'Berk Çağatay Albayrak',
        position: 'Sr. Product Manager',
        appName: 'Fotorama',
        appCategory: 'Photo and video',
        appIcon: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
        avatar: 'https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp'
      },
      reverse: true
    },
    {
      title: 'Know your subscription numbers at any moment',
      description: 'Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.',
      link: 'https://adapty.io/ltv-analytics/',
      linkText: 'See subscription BI',
      image: 'https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp',
      bgColor: '##c0affd',
      quote: {
        text: '"Adapty\'s analytics provides invaluable insights into our app\'s performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy."',
        author: 'Nikolay Chebotarev',
        position: 'Head of UA at Moonly.app',
        appName: 'Moonly',
        appCategory: 'Moon calendar app',
        appIcon: 'https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg',
        avatar: 'https://adapty.io/assets/uploads/2024/02/Nikolay.png'
      }
    },
    {
      title: 'No-code paywall builder',
      description: 'Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.',
      link: 'https://adapty.io/paywall-builder/',
      linkText: 'Create paywalls within minutes',
      image: 'https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp',
      
      quote: {
        text: '"Adapty\'s Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins."',
        author: 'Mike McSweeney',
        position: 'Chief Product Officer',
        appName: 'Moodworks Inc',
        appCategory: 'Mental health apps',
        appIcon: 'https://adapty.io/assets/uploads/2024/02/app-icon-cat.png',
        avatar: 'https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp'
      },
      reverse: true
    },
    {
      title: 'Boost app revenue fast with web funnels',
      description: 'Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.',
      link: 'https://funnelfox.com/',
      linkText: 'Explore FunnelFox',
      image: 'https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x-768x631.webp',
      
    }
  ]

  return (
    <section className="features">
      <div className="container">
        {features.map((feature, index) => (
          <div key={index} className={`feature-row ${feature.reverse ? 'reverse' : ''}`}>
            <div className="feature-content">
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
              <a href={feature.link} className="btn btn-link">
                {feature.linkText}
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="#111111"/>
                </svg>
              </a>
              
              {feature.quote && (
                <div className="feature-quote">
                
                  {feature.quote.logo && (
                    <img src={feature.quote.logo} alt="Company" className="company-logo" />
                  )}
                  {feature.quote.appIcon && (
                    <div className="app-info">
                      <img src={feature.quote.appIcon} alt={feature.quote.appName} className="app-icon" />
                      <div>
                        <div className="app-name">{feature.quote.appName}</div>
                        <div className="app-category">{feature.quote.appCategory}</div>
                      </div>
                    </div>
                  )}
                  <p className="quote-text">{feature.quote.text}</p>
                  <div className="author-info">
                    <img src={feature.quote.avatar} alt={feature.quote.author} />
                    <div>
                      <div className="author-name">{feature.quote.author}</div>
                      <div className="author-position">{feature.quote.position}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="feature-media" style={{ backgroundColor: feature.bgColor }}>
              <img src={feature.image} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

