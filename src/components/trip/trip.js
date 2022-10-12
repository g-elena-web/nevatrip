import React, { useState } from "react";

import check from '../../images/check.svg';
import clock from '../../images/clock.svg';
import spb1 from '../../images/spb1.jpg';

import './trip.css';

function Trip(props) {
    const [more, setMore] = useState(false);
    const {title, tag, image, length, items, price, extraPrice, schedule} = props;

    const tripItems = items.map(item =>
                <div className="description-item d-flex flex-row align-items-center" key={item}>
                    <img src={check} width="16px" height="11.93px" />
                    <span>{item}</span>
                </div>);
    const tripTimes = schedule.map(time => <div className="time" key={time}>{time}</div>);

    const showMore = () => {
        setMore(true);
    }

    return (
        <div className="trip">
            <div className="cover-image" style={{backgroundImage: "url(" + image + ")"}}></div>
            {(tag != undefined) && <div className="new-offer">{tag}</div>}
            <div className="trip-description">
                <div className="trip-header">
                    <div className="length">
                        <img src={clock} width="16px" height="16px" /><span>{length}</span>
                    </div>
                    <h2 className="trip-name">{title}</h2>
                </div>
                {tripItems}
                <div className="description-item schedule">
                    <div className="d-flex flex-row align-items-center">
                        <img src={check} width="16px" height="11.93px" />
                        <span>Ближайший рейс сегодня</span>
                    </div>
                    <div className="time-list">
                        {(tripTimes.length <= 4) ? tripTimes :
                            <>
                                {tripTimes.slice(0, 3)}
                                {(!more) && <div className="time" key="more" onClick={showMore}>ещё...</div>}
                                {(more) && tripTimes.slice(3)}
                            </>
                        }
                        
                    </div>
                </div>
                <div className="trip-footer">
                    <div className="pricing">
                        <p className="price">{price}&#8381;</p>
                        {(extraPrice != undefined) && <p className="extra-price">{extraPrice}р на причале</p>}
                    </div>
                    <a className="button">Подробнее</a>
                </div>
                
            </div>
            
        </div>
    );
}

export default Trip;