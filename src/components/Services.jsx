import { useInView } from 'react-intersection-observer'
import { FiShield, FiTruck, FiTool, FiUsers, FiHeart, FiClock } from 'react-icons/fi'
import './Services.css'

const services = [
    {
        icon: <FiShield />,
        title: '福祉用具貸与',
        description: '車いす、特殊寝台、歩行器、手すりなど、介護保険適用の福祉用具を、ご利用者様の状態に合わせてレンタルいたします。',
    },
    {
        icon: <FiTool />,
        title: '住宅改修サポート',
        description: '手すりの取り付け、段差解消、滑り防止など、ご自宅を安全で快適に暮らせる環境にリフォームするお手伝いをします。',
    },
    {
        icon: <FiTruck />,
        title: '迅速な配達・設置',
        description: 'ご自宅への福祉用具の配達・設置・調整はすべて専門スタッフが行います。使い方の説明も丁寧にいたします。',
    },
    {
        icon: <FiUsers />,
        title: 'ケアマネ連携',
        description: 'ケアマネジャーや医療機関と密に連携し、ご利用者様に最適な福祉用具の選定をサポートします。',
    },
    {
        icon: <FiHeart />,
        title: 'アフターフォロー',
        description: '定期的なメンテナンス・点検を実施。ご利用中のお困りごとにも迅速に対応いたします。',
    },
    {
        icon: <FiClock />,
        title: '介護用品販売',
        description: '紙おむつ、入浴補助用具など、日常的に必要な介護用品も取り扱っています。ご相談ください。',
    },
]

const features = [
    { number: '30+', label: '年の実績' },
    { number: '500+', label: '以上のご利用者様' },
    { number: '24h', label: '緊急対応' },
    { number: '100%', label: '地域密着' },
]

export default function Services() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="services section-padding" id="services" ref={ref}>
            <div className="container">
                <div className={`section-title fade-in ${inView ? 'visible' : ''}`}>
                    <p className="subtitle">SERVICES</p>
                    <h2>私たちのサービス</h2>
                    <p className="description">
                        ご利用者様一人ひとりの暮らしに寄り添い、<br />
                        最適な福祉用具とサービスをご提供します。
                    </p>
                </div>

                <div className={`services-grid stagger-children`}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card fade-in ${inView ? 'visible' : ''}`}
                            style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className={`features-row stagger-children`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-item scale-in ${inView ? 'visible' : ''}`}
                            style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
                        >
                            <div className="feature-number">{feature.number}</div>
                            <div className="feature-label">{feature.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
