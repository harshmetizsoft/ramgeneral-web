"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div className="counter-area-1 space-bottom" ref={counterRef}>
            <div className="container">
                <div className="row justify-content-between gy-40">
                    <div className="col-auto">
                        <div className="counter-card">
                             <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={1250} />}</span>+</h2>
                             <p className="counter-card_text">Completed Projects</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="counter-card">
                             <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={180} />}</span>+</h2>
                             <p className="counter-card_text">Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="counter-card">
                             <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={85} />}</span>+</h2>
                             <p className="counter-card_text">Expert Team</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="counter-card">
                             <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={58} />}</span>+</h2>
                             <p className="counter-card_text">Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
