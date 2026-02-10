import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

const navItems = [
    { label: 'サービス', href: '#services' },
    { label: '取扱商品', href: '#products' },
    { label: 'ご利用の流れ', href: '#flow' },
    { label: '会社概要', href: '#about' },
    { label: 'お問い合わせ', href: '#contact', cta: true },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
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
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
                <div className="logo" onClick={scrollToTop}>
                    <div className="logo-icon">SM</div>
                    <div className="logo-text">
                        <span className="company-name">山陽メディック</span>
                        <span className="tagline">福祉用具貸与事業所</span>
                    </div>
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`nav-link ${item.cta ? 'cta-link' : ''}`}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div
                    className={`mobile-overlay ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                />

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニュー"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    )
}
