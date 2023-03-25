import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

function Listing({items}) {
    const elements = items.map((item) =>
        <Card item={item} key={item.listing_id}/>);

    return (
        elements
    )
}

Listing.defaultProps = {
    items: []
};

export default Listing;

Listing.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            state: PropTypes.string.isRequired,
            url: PropTypes.string,
            title: PropTypes.string,
            currency_code: PropTypes.string,
            price: PropTypes.string,
        })
    ).isRequired,
};