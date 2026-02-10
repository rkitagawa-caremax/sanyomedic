import { useInView } from 'react-intersection-observer'
import './Products.css'

const WheelchairIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="55" r="18" stroke="#2D6A4F" strokeWidth="3" fill="none" />
        <circle cx="30" cy="55" r="4" fill="#2D6A4F" />
        <path d="M30 37V20" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="30" cy="16" r="5" fill="#40916C" />
        <path d="M30 37H55L62 60" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M55 60H68" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
    </svg>
)

const BedIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="30" width="64" height="25" rx="4" stroke="#2D6A4F" strokeWidth="3" fill="none" />
        <path d="M8 55V68" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M72 55V68" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="22" cy="25" rx="10" ry="6" fill="#40916C" opacity="0.5" />
        <path d="M12 30V20C12 16 16 14 22 14" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 68H20M60 68H76" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

const WalkerIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10V60" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 10V60" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 10H60" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 35H60" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="66" r="6" stroke="#2D6A4F" strokeWidth="2" fill="#40916C" opacity="0.4" />
        <circle cx="60" cy="66" r="6" stroke="#2D6A4F" strokeWidth="2" fill="#40916C" opacity="0.4" />
    </svg>
)

const HandleIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 70V30C15 18 25 10 40 10" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round" />
        <path d="M40 10H55" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round" />
        <circle cx="15" cy="70" r="3" fill="#40916C" />
        <rect x="14" y="25" width="50" height="6" rx="3" fill="#40916C" opacity="0.2" stroke="#2D6A4F" strokeWidth="1" />
    </svg>
)

const CaneIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 8C55 8 58 18 58 24C58 30 50 32 40 32" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M40 32V72" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="74" r="3" fill="#40916C" />
    </svg>
)

const LiftIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="35" width="40" height="35" rx="5" stroke="#2D6A4F" strokeWidth="3" fill="none" />
        <path d="M40 15V35" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 25L40 15L50 25" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="52" r="8" stroke="#40916C" strokeWidth="2" fill="rgba(64,145,108,0.2)" />
        <circle cx="40" cy="52" r="3" fill="#2D6A4F" />
    </svg>
)

const SlopeIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 65L70 25" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round" />
        <path d="M10 65H70V65" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M70 25V65" stroke="#2D6A4F" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="35" cy="47" r="6" fill="#40916C" opacity="0.3" stroke="#2D6A4F" strokeWidth="2" />
    </svg>
)

const BathIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40H70" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M15 40V60C15 66 22 72 40 72C58 72 65 66 65 60V40" stroke="#2D6A4F" strokeWidth="3" fill="none" />
        <path d="M12 40V28C12 20 20 16 24 20" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="32" r="2" fill="#40916C">
            <animate attributeName="cy" values="32;28;32" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="30" r="2" fill="#40916C">
            <animate attributeName="cy" values="30;26;30" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="33" r="2" fill="#40916C">
            <animate attributeName="cy" values="33;29;33" dur="1.8s" repeatCount="indefinite" />
        </circle>
    </svg>
)

const products = [
    {
        icon: <WheelchairIcon />,
        name: '車いす',
        description: '自走式・介助式など、ご利用者様に合わせた最適な車いすをご提案します。',
        category: '貸与',
        tag: '介護保険対応',
    },
    {
        icon: <BedIcon />,
        name: '特殊寝台（介護ベッド）',
        description: '背上げ・膝上げ・高さ調整機能付き。快適な睡眠と起き上がりをサポートします。',
        category: '貸与',
        tag: '介護保険対応',
    },
    {
        icon: <WalkerIcon />,
        name: '歩行器・歩行補助',
        description: '室内用から屋外用まで、安全な歩行をサポートする各種歩行器を取り揃えています。',
        category: '貸与',
        tag: '介護保険対応',
    },
    {
        icon: <HandleIcon />,
        name: '手すり',
        description: '工事不要の置き型から、壁面取付型まで。転倒予防に効果的な手すりです。',
        category: '貸与',
        tag: '介護保険対応',
    },
    {
        icon: <CaneIcon />,
        name: '杖・ステッキ',
        description: '一本杖から多点杖まで。おしゃれなデザインの杖も多数取り揃えています。',
        category: '販売',
        tag: '各種取揃え',
    },
    {
        icon: <LiftIcon />,
        name: '移動用リフト',
        description: 'ベッドからの移乗や入浴時の移動をサポートする各種リフトをご用意しています。',
        category: '貸与',
        tag: '介護保険対応',
    },
    {
        icon: <SlopeIcon />,
        name: 'スロープ',
        description: '段差解消用のスロープ。玄関や室内の段差を安全に移動できます。',
        category: '貸与',
        tag: '介護保険対応',
    },
    {
        icon: <BathIcon />,
        name: '入浴補助用具',
        description: 'シャワーチェア、浴槽手すり、バスボードなど。安全な入浴をサポートします。',
        category: '販売',
        tag: '特定福祉用具',
    },
]

export default function Products() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="products section-padding" id="products" ref={ref}>
            <div className="container">
                <div className={`section-title fade-in ${inView ? 'visible' : ''}`}>
                    <p className="subtitle">PRODUCTS</p>
                    <h2>取扱福祉用具</h2>
                    <p className="description">
                        介護保険を利用したレンタル・購入が可能な<br />
                        福祉用具を幅広く取り揃えています。
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`product-card fade-in ${inView ? 'visible' : ''}`}
                            style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
                        >
                            <div className="product-image">
                                {product.icon}
                                <span className="product-category-badge">{product.category}</span>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span className="product-tag">{product.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
