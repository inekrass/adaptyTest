import React from 'react'

function SDKPlatforms() {
  const platforms = [
    { name: 'Swift SDK', icon: 'https://adapty.io/assets/uploads/2024/01/icon-swift-64x64-1.svg', link: 'https://adapty.io/sdk/ios/' },
    { name: 'Kotlin SDK', icon: 'https://adapty.io/assets/uploads/2024/01/icon-kotlin-64x64-1.svg', link: 'https://adapty.io/sdk/android/' },
    { name: 'React Native SDK', icon: 'https://adapty.io/assets/uploads/2024/01/icon-react-native-64x64-1.svg', link: 'https://adapty.io/sdk/react-native/' },
    { name: 'Unity SDK', icon: 'https://adapty.io/assets/uploads/2024/01/icon-unity-white-64x64-1.svg', link: 'https://adapty.io/sdk/unity/' },
    { name: 'Flutter SDK', icon: 'https://adapty.io/assets/uploads/2024/01/icon-flutter-64x64-1.svg', link: 'https://adapty.io/sdk/flutter/' },
    { name: 'Capacitor SDK', icon: 'https://adapty.io/assets/uploads/2025/10/capacitor-logo.svg', link: 'https://adapty.io/sdk/capacitor/' },
    { name: 'Kotlin Multiplatform KMP SDK', icon: 'https://adapty.io/assets/uploads/2025/10/kmp-logo.svg', link: 'https://adapty.io/sdk/kmp/' },
    { name: 'FlutterFlow', icon: 'https://adapty.io/assets/uploads/2024/09/icon-flutterflow-64x64-1.svg', link: 'https://adapty.io/sdk/flutterflow/' },
    { name: 'Web API', icon: 'https://adapty.io/assets/uploads/2024/01/icon-web-64x64-1.svg', link: 'https://adapty.io/sdk/web/' },
    { name: 'Stripe', icon: 'https://adapty.io/assets/uploads/2024/02/icon-stripe-64x64-1.svg', link: 'https://adapty.io/integrations/stripe/' }
  ]

  return (
    <section className="sdk-platforms">
      <div className="container">
        <h2 className="section-title">Get the SDK for your platform</h2>
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <a key={index} href={platform.link} className="platform-card">
              <img src={platform.icon} alt={platform.name} className="platform-icon" />
              <div className="platform-info">
                <h3 className="platform-name">{platform.name}</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="#8B5CF6"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SDKPlatforms

