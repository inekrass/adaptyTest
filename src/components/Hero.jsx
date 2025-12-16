import React, { useState } from 'react'

function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="promo-banner">
            <span className="promo-mark">Ebook</span>
            <a href="https://adapty.io/ebooks/100k-app-playbook/" className="promo-link">
              $100K playbook | download
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#242424"/>
              </svg>
            </a>
          </div>
          
          <h1 className="hero-title">Revenue management for in-app purchases</h1>
          
          <p className="hero-subtitle">
            Save months on integrating subscriptions and double your app revenue with paywall management.
          </p>
          
          <div className="hero-actions">
            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="btn btn-primary btn-inside-input">
                Start for free
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#FFFFFF"/>
                </svg>
              </button>
            </form>
            <a href="https://adapty.io/schedule-demo/" className="btn btn-secondary">
              Book a demo
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#6720ff"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-media">
          <img 
            src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp" 
            alt="Adapty Paywall Demo Preview"
            className="hero-image mobile"
          />
          <img 
            src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp" 
            alt="Adapty Overview"
            className="hero-image desktop"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

