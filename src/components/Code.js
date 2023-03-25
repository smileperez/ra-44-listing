import React from 'react';
import PropTypes from 'prop-types';

function Code({code, price}) {
    const result = code === 'USD' ? `$${price}` : code === 'EUR' ? `€${price}` : `${price} ${code}`;
    return (
        <>
            {result}
        </>
    )
}

export default Code;

Code.propTypes = {
    code: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};