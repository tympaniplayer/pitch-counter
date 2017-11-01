import React from 'react';
import PropTypes from 'prop-types';

const Hello = ( { onEdit, name } ) => (
    <div style={{textAlign: 'center'}}>
        <h1>Welcome</h1>
        <p>Hello {name}</p>
        <input onChange={onEdit}  defaultValue={name}/>
    </div>
)

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default Hello;