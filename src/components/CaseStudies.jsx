import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function CaseStudies() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cases = [
    {
      icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp',
      title: 'Productivity app',
      category: 'Productivity',
      metric: '+50% in total revenue',
      description: 'How pricing tests unlocked app\'s potential',
      link: 'https://adapty.io/case-studies/productivity-app-and-autopilot/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp',
      title: 'Text on Pic',
      category: 'Photo & Video',
      metric: 'Over 30% MRR growth',
      description: 'How to boost revenue with the right experiments',
      link: 'https://adapty.io/case-studies/photo-editing-app-and-autopilot/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp',
      title: 'Trip planning',
      category: 'Travel',
      metric: '+102% ARPU growth',
      description: 'New onboarding and pricing strategy doubled revenue per user',
      link: 'https://adapty.io/case-studies/travel-app/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp',
      title: 'Going Merry',
      category: 'App publisher',
      metric: '5x MRR growth',
      description: 'How to scale subscription revenue with Paywall Builder',
      link: 'https://adapty.io/case-studies/going-merry/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp',
      title: 'Shmoody',
      category: 'Mental health',
      metric: 'ARR scaled from $0 to $2M',
      description: 'How to grow from a free app to $2M ARR with Adapty',
      link: 'https://adapty.io/case-studies/shmoody/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png',
      title: 'Lively',
      category: 'Health & Fitness',
      metric: 'Refund rate dropped by 83%',
      description: 'Saved 82% of potentially lost revenue',
      link: 'https://adapty.io/case-studies/lively/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp',
      title: 'Glam AI',
      category: 'Makeup & Beauty',
      metric: 'ROAS from Adapty – 108%',
      description: 'How to scale to $1.2M ARR in 3 months',
      link: 'https://adapty.io/case-studies/glam-ai/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp',
      title: 'Pepapp',
      category: 'Health & Fitness',
      metric: '400% ROI on Adapty',
      description: 'How to make Adapty free with Refund Saver',
      link: 'https://adapty.io/case-studies/pepapp/'
    },
    {
      icon: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
      title: 'Fotorama',
      category: 'Photo & Video',
      metric: 'Refund rate dropped 40%',
      description: 'How to decrease the refund rate with Adapty',
      link: 'https://adapty.io/case-studies/fotorama/'
    }
  ]

  const renderCaseCard = (caseStudy, index) => (
    <a key={index} href={caseStudy.link} className="case-card">
      <div className="case-header">
        <img src={caseStudy.icon} alt={caseStudy.title} className="case-icon" />
        <div className="case-info">
          <div className="case-title">{caseStudy.title}</div>
          <div className="case-category">{caseStudy.category}</div>
        </div>
      </div>
      <div className="case-metric">{caseStudy.metric}</div>
      <div className="case-description">{caseStudy.description}</div>
      <span className="case-link">
        Read more
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424"/>
        </svg>
      </span>
    </a>
  )

  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="section-title">Read the real cases of our customers</h2>
        
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            loopAdditionalSlides={2}
            watchSlidesProgress={true}
            pagination={{ 
              clickable: true,
              type: 'bullets'
            }}
            className="cases-swiper"
          >
            {cases.map((caseStudy, index) => (
              <SwiperSlide key={index}>
                {renderCaseCard(caseStudy, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="cases-grid">
            {cases.map((caseStudy, index) => renderCaseCard(caseStudy, index))}
          </div>
        )}
        
        <a href="https://adapty.io/case-studies/" className="btn btn-link">
          Read all cases
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default CaseStudies

