import { useInView } from 'react-intersection-observer'
import { FiPhoneCall, FiClipboard, FiTruck, FiCheckCircle, FiRefreshCw } from 'react-icons/fi'
import './Flow.css'

const steps = [
    {
        number: 1,
        icon: <FiPhoneCall />,
        title: 'お問い合わせ・ご相談',
        description: 'まずはお気軽にお電話ください。ケアマネジャーからのご紹介も承ります。ご利用者様の状況やお困りごとをお聞かせください。',
    },
    {
        number: 2,
        icon: <FiClipboard />,
        title: 'ご訪問・アセスメント',
        description: '専門スタッフがご自宅を訪問し、生活環境やお身体の状態を確認。最適な福祉用具をご提案いたします。',
    },
    {
        number: 3,
        icon: <FiTruck />,
        title: 'お届け・設置・フィッティング',
        description: '選定した福祉用具をご自宅までお届けし、設置・調整を行います。使い方も丁寧にご説明します。',
    },
    {
        number: 4,
        icon: <FiCheckCircle />,
        title: 'ご利用開始',
        description: 'ご利用開始後もお気軽にご連絡ください。使用感の確認や、必要に応じた調整・交換に対応します。',
    },
    {
        number: 5,
        icon: <FiRefreshCw />,
        title: '定期メンテナンス・フォローアップ',
        description: '定期的にご自宅を訪問し、福祉用具の状態確認やメンテナンスを行います。お身体の変化に合わせた用具の見直しも。',
    },
]

export default function Flow() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="flow section-padding" id="flow" ref={ref}>
            <div className="container">
                <div className={`section-title fade-in ${inView ? 'visible' : ''}`}>
                    <p className="subtitle">FLOW</p>
                    <h2>ご利用の流れ</h2>
                    <p className="description">
                        お問い合わせからご利用開始まで、<br />
                        スタッフが丁寧にサポートいたします。
                    </p>
                </div>

                <div className="flow-steps">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flow-step fade-in-left ${inView ? 'visible' : ''}`}
                            style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                        >
                            <div className="flow-step-number">{step.number}</div>
                            <div className="flow-step-content">
                                <h3>
                                    <span className="step-icon">{step.icon}</span>
                                    {step.title}
                                </h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
