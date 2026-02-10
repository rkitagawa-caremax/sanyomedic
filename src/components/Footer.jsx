import { useState, useEffect } from 'react'
import { FiPhone, FiMapPin, FiArrowUp, FiPrinter } from 'react-icons/fi'
import './Footer.css'

const navLinks = [
    { label: 'サービス', href: '#services' },
    { label: '取扱商品', href: '#products' },
    { label: 'ご利用の流れ', href: '#flow' },
    { label: '会社概要', href: '#about' },
    { label: 'お問い合わせ', href: '#contact' },
]

export default function Footer() {
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 500)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
            const offset = 80
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="footer-logo-icon">SM</div>
                                <span className="footer-company-name">山陽メディック</span>
                            </div>
                            <p>
                                岡山県瀬戸内市で、福祉用具の貸与・販売を通じて、
                                地域の皆さまの安心な暮らしを支えています。
                                お気軽にご相談ください。
                            </p>
                        </div>

                        <div className="footer-nav">
                            <h4>サイトマップ</h4>
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h4>連絡先</h4>
                            <div className="footer-contact-item">
                                <FiPhone className="icon" />
                                <span>0869-24-1052</span>
                            </div>
                            <div className="footer-contact-item">
                                <FiPrinter className="icon" />
                                <span>0869-24-1289</span>
                            </div>
                            <div className="footer-contact-item">
                                <FiMapPin className="icon" />
                                <span>岡山県瀬戸内市邑久町向山76</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} 有限会社山陽メディック All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            <button
                className={`back-to-top ${showTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="トップに戻る"
            >
                <FiArrowUp />
            </button>
        </>
    )
}
