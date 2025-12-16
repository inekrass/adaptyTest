import React, { useState, useEffect } from 'react'

function SLAStats() {
  const [counters, setCounters] = useState({
    revenue: 0,
    uptime: 0,
    users: 0,
    apiCalls: 0
  })

  useEffect(() => {
    const intervals = []
    
    // Animate revenue to 2B
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        revenue: prev.revenue < 2 ? prev.revenue + 0.1 : 2
      }))
    }, 100))

    // Animate uptime to 99.99%
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        uptime: prev.uptime < 99.99 ? prev.uptime + 5 : 99.99
      }))
    }, 50))

    // Animate users to 2.5B
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        users: prev.users < 2.5 ? prev.users + 0.1 : 2.5
      }))
    }, 100))

    // Animate API calls to 60B
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        apiCalls: prev.apiCalls < 60 ? prev.apiCalls + 3 : 60
      }))
    }, 50))

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  return (
    <section className="sla-stats">
      <div className="container">
        <h2 className="section-title">
          Adapty processes subscription revenue with the industry's highest SLA Rate
        </h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">
              ${counters.revenue.toFixed(0)}B
            </div>
            <div className="stat-label">tracked revenue</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {counters.uptime.toFixed(2)}%
            </div>
            <div className="stat-label">historical uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {counters.users.toFixed(1)}B
            </div>
            <div className="stat-label">users served</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {Math.round(counters.apiCalls)}B
            </div>
            <div className="stat-label">API calls / month</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SLAStats

