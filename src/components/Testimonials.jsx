import React, { useState, useEffect } from 'react'

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      text: '"Migrating off RevenueCat was not an easy decision for us. We\'ve chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner."',
      author: 'Cem Ortabas',
      position: 'Co-founder and CEO, HubX',
      avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Cem-Ortabas.webp',
      logo: 'https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg'
    },
    {
      text: '"We\'ve been working with Adapty since 2021 and I couldn\'t be happier about it. We\'ve tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty."',
      author: 'Chris Bick',
      position: 'Founder and CEO, Bickster',
      avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Chris-Bick.webp',
      logo: 'https://adapty.io/assets/uploads/2023/12/logo-bickster.png'
    },
    {
      text: '"We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors."',
      author: 'Yalçın Özdemir',
      position: 'Founder & CEO, AppNation',
      avatar: 'https://adapty.io/assets/uploads/2024/02/Asman.webp',
      logo: 'https://adapty.io/assets/uploads/2024/02/logo-AppNation-white.png'
    },
    {
      text: '"Adapty\'s platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel."',
      author: 'Kyle Smith',
      position: 'Head of data at Smitten Dating',
      avatar: 'https://adapty.io/assets/uploads/2024/02/Kyle2.webp',
      logo: 'https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp'
    },
    {
      text: '"We\'ve tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We\'ve tested them all: products, title text, CTA buttons, images, videos etc. With Adapty\'s A/B testing, we managed to double our monthly revenue. I wasn\'t sure if one instrument could make such an impact, but I witnessed it myself."',
      author: 'Roi Mulia',
      position: 'Founder & CEO, SocialKit',
      avatar: 'https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp',
      logo: 'https://adapty.io/assets/uploads/2024/02/logo-social-white.svg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 7500)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">
          Developer from all kind of apps move to Adapty to grow their revenue
        </h2>
        
        <div className="testimonials-slider">
          <div className="testimonial-slide" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <img src={testimonial.avatar} alt={testimonial.author} className="testimonial-avatar" />
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">{testimonial.author}</div>
                  <div className="testimonial-position">{testimonial.position}</div>
                  <img src={testimonial.logo} alt="Company" className="testimonial-logo" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

