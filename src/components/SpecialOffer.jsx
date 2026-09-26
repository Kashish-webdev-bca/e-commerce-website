import { useState, useEffect } from "react"


function SpecialOffer() {

    const [timeLeft, setTimeLeft] = useState({
        hours: 8,
        minutes: 45,
        seconds: 30
    })

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft((prevTime) => {

                let hours = prevTime.hours
                let minutes = prevTime.minutes
                let seconds = prevTime.seconds

                if (seconds > 0) {
                    seconds = seconds - 1
                }
                else if (minutes > 0) {
                    minutes = minutes - 1
                    seconds = 59
                }
                else if (hours > 0) {
                    hours = hours - 1
                    minutes = 59
                    seconds = 59
                }
                else {
                    clearInterval(timer)
                }

                return {
                    hours,
                    minutes,
                    seconds
                }
            })

        }, 1000)

        return () => clearInterval(timer)

    }, [])

    return (

        <section id="special">
            <div className="spbg"></div>
            <div className="container" style={{ position: "relative", zIndex: "2" }}>
                <div className="row align-items-center g-5">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="sptag"><i className="fas fa-bolt me-1"></i>Limited Time Offer</div>
                        <h2 className="sptitle">Get 30% Off<br />Our Signature<br /><span>Burger</span> Meal</h2>
                        <p className="spdesc">Don't miss our weekend special - grab our award-winning signature burger combo with loaded fries and a premium shake at an unbeatable price.</p>
                        <div className="cdwrap">
                            <div className="cditem"><span className="cdnum">{String(timeLeft.hours).padStart(2, "0")}</span><span className="cdlbl">Hours</span></div>
                            <div className="cditem"><span className="cdnum"> {String(timeLeft.minutes).padStart(2, "0")}</span><span className="cdlbl">Minutes</span></div>
                            <div className="cditem"><span className="cdnum">{String(timeLeft.seconds).padStart(2, "0")}</span><span className="cdlbl">Seconds</span></div>
                        </div>
                        <a href="#menu" className="btn-red"><i className="fas fa-shopping-cart"></i>Grab the Deal</a>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="spimgw">
                            <div className="spglow"></div>
                            <div className="sppbdg"><span className="old">$24.99</span><span className="np">$17.49</span></div>
                            <img src="img/off-img.jpg" alt="Special Burger" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default SpecialOffer