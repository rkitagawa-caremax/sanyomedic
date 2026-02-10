import { FiPhone, FiHeart } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
    const handleClick = (e, href) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
            const offset = 80
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-overlay" />

            <div className="hero-particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="particle" />
                ))}
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="dot" />
                        岡山県瀬戸内市の福祉用具専門店
                    </div>
                    <h1>
                        あなたの暮らしに、<br />
                        <span className="highlight">安心と笑顔</span>を。
                    </h1>
                    <p className="hero-subtitle">
                        有限会社山陽メディックは、1995年の設立以来、<br />
                        福祉用具の貸与・販売を通じて、<br />
                        地域の皆さまの快適な暮らしを支えています。
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary" onClick={(e) => handleClick(e, '#contact')}>
                            <FiPhone /> お問い合わせ
                        </a>
                        <a href="#services" className="btn-secondary" onClick={(e) => handleClick(e, '#services')}>
                            サービスを見る
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-illustration">
                        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* House / Home */}
                            <rect x="120" y="180" width="160" height="130" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            <polygon points="100,185 200,110 300,185" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            {/* Door */}
                            <rect x="175" y="240" width="50" height="70" rx="4" fill="rgba(224,122,95,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                            <circle cx="215" cy="278" r="4" fill="rgba(255,255,255,0.6)" />
                            {/* Window */}
                            <rect x="140" y="210" width="25" height="25" rx="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                            <rect x="235" y="210" width="25" height="25" rx="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                            {/* Heart */}
                            <path d="M200 150 C200 140, 185 125, 172 135 C160 145, 165 160, 200 180 C235 160, 240 145, 228 135 C215 125, 200 140, 200 150Z" fill="var(--color-accent)" opacity="0.7" />
                            {/* Hands */}
                            <path d="M130 320 Q165 290 200 320 Q235 290 270 320" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />
                            {/* Person silhouettes */}
                            <circle cx="160" cy="340" r="12" fill="rgba(255,255,255,0.25)" />
                            <circle cx="240" cy="340" r="12" fill="rgba(255,255,255,0.25)" />
                            {/* Sparkles */}
                            <circle cx="100" cy="140" r="3" fill="rgba(255,255,255,0.3)">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="300" cy="130" r="2" fill="rgba(255,255,255,0.3)">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="320" cy="200" r="3" fill="rgba(255,255,255,0.3)">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="80" cy="250" r="2" fill="rgba(255,255,255,0.3)">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                    <div className="hero-floating-card">
                        <div className="icon-circle">
                            <FiHeart />
                        </div>
                        <div className="card-info">
                            <div className="card-number">30年+</div>
                            <div className="card-label">地域に寄り添う信頼の実績</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="var(--color-warm-bg)" />
                </svg>
            </div>
        </section>
    )
}
