import React from "react";
import Code from "./Code";
import Level from "./Level";
import "../App.css";

function Card({item}) {
    if (item.state === "active") {
        return (
        <div className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN}/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</p>
                    <p className="item-price"><Code code={item.currency_code} price={item.price} /></p>
                    <Level quantity={item.quantity}/>
                </div>
            </div>
        </div>
        )
    }
    return (<></>);
}

export default Card;