import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiPhone, FiMail, FiMapPin, FiPrinter } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        category: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', phone: '', email: '', category: '', message: '' })
    }

    return (
        <section className="contact section-padding" id="contact" ref={ref}>
            <div className="container">
                <div className={`section-title fade-in ${inView ? 'visible' : ''}`}>
                    <p className="subtitle">CONTACT</p>
                    <h2>お問い合わせ</h2>
                    <p className="description">
                        福祉用具に関するご相談・お問い合わせは<br />
                        お気軽にご連絡ください。
                    </p>
                </div>

                <div className="contact-grid">
                    <div className={`contact-info fade-in-left ${inView ? 'visible' : ''}`}>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <FiPhone />
                            </div>
                            <div className="contact-info-text">
                                <h4>お電話でのお問い合わせ</h4>
                                <p>0869-24-1052</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <FiPrinter />
                            </div>
                            <div className="contact-info-text">
                                <h4>FAX</h4>
                                <p>0869-24-1289</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <FiMapPin />
                            </div>
                            <div className="contact-info-text">
                                <h4>所在地</h4>
                                <p className="small-text">〒701-4261<br />岡山県瀬戸内市邑久町向山76</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <FiMail />
                            </div>
                            <div className="contact-info-text">
                                <h4>メールでのお問い合わせ</h4>
                                <p className="small-text">下記フォームよりお送りください</p>
                            </div>
                        </div>

                        <div className="contact-hours">
                            <h4>営業時間</h4>
                            <p>
                                月曜日〜金曜日：9:00 〜 18:00<br />
                                土曜日：9:00 〜 12:00<br />
                                ※日曜・祝日は休業<br />
                                ※緊急時はお電話にてご連絡ください
                            </p>
                        </div>
                    </div>

                    <form
                        className={`contact-form fade-in-right ${inView ? 'visible' : ''}`}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label>
                                    お名前<span className="required">*必須</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="山田 太郎"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>お電話番号</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="090-0000-0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>メールアドレス</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>お問い合わせ種別</label>
                            <select name="category" value={formData.category} onChange={handleChange}>
                                <option value="">選択してください</option>
                                <option value="rental">福祉用具レンタルについて</option>
                                <option value="purchase">福祉用具購入について</option>
                                <option value="reform">住宅改修について</option>
                                <option value="consultation">ご利用相談</option>
                                <option value="other">その他</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>
                                お問い合わせ内容<span className="required">*必須</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="お問い合わせ内容をご記入ください"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="form-submit">
                            {submitted ? '✓ 送信しました' : '送信する'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
