import React, { useState } from 'react'

function CodeIntegration() {
  const [activeTab, setActiveTab] = useState('swift')

  const codeExamples = {
    swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
        // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`,
    reactNative: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
    flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

try {
  await Adapty().activate();

  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
    unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`
  }

  const tabs = [
    { id: 'swift', label: 'Swift', repo: 'https://github.com/adaptyteam/AdaptySDK-iOS' },
    { id: 'kotlin', label: 'Kotlin', repo: 'https://github.com/adaptyteam/AdaptySDK-Android' },
    { id: 'reactNative', label: 'React Native', repo: 'https://github.com/adaptyteam/AdaptySDK-React-Native' },
    { id: 'flutter', label: 'Flutter', repo: 'https://github.com/adaptyteam/AdaptySDK-Flutter' },
    { id: 'unity', label: 'Unity', repo: 'https://github.com/adaptyteam/AdaptySDK-Unity' }
  ]

  return (
    <section className="code-integration">
      <div className="container">
        <h2 className="section-title">Integrate in-app purchases with a few lines of code</h2>
        
        <div className="code-section">
          <div className="code-description">
            <p>
              Integrate IAPs within a few hours without server coding. Adapty handles the correct 
              subscription state, taking everything under the hood, from free trials to refunds, 
              in a simple, developer-friendly SDK.
            </p>
            <a href="https://adapty.io/sdk/" className="btn btn-link">
              Make subscriptions easy
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="#111111"/>
              </svg>
            </a>
            
            <div className="quote-block">
              <img src="https://adapty.io/assets/uploads/2024/08/quotes-white.svg" alt="Quote" className="quote-mark" />
              <div className="company-info">
                <img src="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp" alt="Smitten" />
              </div>
              <p className="quote-text">
                "Adapty SDK made integrating in-app purchases a walk in the park. With just a few 
                lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
              </p>
              <div className="author-info">
                <img src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp" alt="Magnus Ólafsson" />
                <div>
                  <div className="author-name">Magnús Ólafsson</div>
                  <div className="author-position">Chief Technology Officer at Smitten</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="code-display">
            <div className="code-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <pre className="code-block">
              <code>{codeExamples[activeTab]}</code>
            </pre>
            <div className="code-footer">
              <div className="github-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>100% Open Source</span>
              </div>
              <a href={tabs.find(t => t.id === activeTab).repo} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeIntegration

