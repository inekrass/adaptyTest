import React from 'react'

function G2Awards() {
  const awards = [
    { name: 'Best Results, winter 2025', image: 'https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg' },
    { name: 'High Performer, winter 2025', image: 'https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg' },
    { name: 'Best Usability, winter 2025', image: 'https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg' },
    { name: 'Best Relationship, winter 2025', image: 'https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg' },
    { name: 'Most Implementable, winter 2025', image: 'https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg' }
  ]

  return (
    <section className="g2-awards">
      <div className="container">
        <h2 className="section-title">Trusted for usability and customer service</h2>
        
        <a href="https://www.g2.com/products/adapty-io/reviews" target="_blank" rel="noopener noreferrer" className="reviews-link">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#808080">
                <path d="M10 0L12.9389 6.90983L20 8.09017L15 13.1803L16.1803 20L10 16.5902L3.81967 20L5 13.1803L0 8.09017L7.06107 6.90983L10 0Z"/>
              </svg>
            ))}
          </div>
          <span className="reviews-count">Based on 500+ reviews</span>
        </a>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <a
              key={index}
              href="https://www.g2.com/products/adapty-io/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="award-badge"
            >
              <img src={award.image} alt={award.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default G2Awards

