import { useInView } from 'react-intersection-observer'
import './About.css'

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="about section-padding" id="about" ref={ref}>
            <div className="container">
                <div className={`section-title fade-in ${inView ? 'visible' : ''}`}>
                    <p className="subtitle">ABOUT US</p>
                    <h2>会社概要</h2>
                </div>

                <div className="about-content">
                    <div className={`about-left fade-in-left ${inView ? 'visible' : ''}`}>
                        <div className="about-greeting">
                            <h3>代表ご挨拶</h3>
                            <p>
                                当社は1995年の設立以来、岡山県瀬戸内市を中心に
                                福祉用具の貸与・販売を行ってまいりました。
                                <br /><br />
                                「すべてのご利用者様が、住み慣れたご自宅で
                                安心して暮らし続けられるように」という想いを胸に、
                                専門知識を持ったスタッフが一人ひとりに寄り添った
                                サービスをご提供いたします。
                                <br /><br />
                                ご高齢の方やご家族の皆さまが笑顔でいられるよう、
                                これからも地域に根ざした福祉サービスの向上に
                                努めてまいります。
                            </p>
                            <div className="greeting-sign">
                                <span>有限会社山陽メディック 代表取締役社長</span>
                                久山　寛記
                            </div>
                        </div>
                    </div>

                    <div className={`about-right fade-in-right ${inView ? 'visible' : ''}`}>
                        <h3>基本情報</h3>
                        <table className="company-table">
                            <tbody>
                                <tr>
                                    <th>会社名</th>
                                    <td>有限会社山陽メディック</td>
                                </tr>
                                <tr>
                                    <th>代表者</th>
                                    <td>代表取締役社長　久山 寛記</td>
                                </tr>
                                <tr>
                                    <th>設立年月日</th>
                                    <td>1995年7月30日</td>
                                </tr>
                                <tr>
                                    <th>法人番号</th>
                                    <td>5260002031392</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>〒701-4261<br />岡山県瀬戸内市邑久町向山76</td>
                                </tr>
                                <tr>
                                    <th>電話番号</th>
                                    <td>0869-24-1052</td>
                                </tr>
                                <tr>
                                    <th>FAX番号</th>
                                    <td>0869-24-1289</td>
                                </tr>
                                <tr>
                                    <th>事業内容</th>
                                    <td>福祉用具貸与・販売<br />住宅改修</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="company-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0!2d134.1!3d34.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzAwLjAiTiAxMzTCsDA2JzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1700000000000"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="有限会社山陽メディック 所在地"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
