import React from 'react'
import PropTypes from 'prop-types'
import {Avatar } from '@material-ui/core';


const CustomAvatar = props => {
    return (
        <div>
            <Avatar/>
        </div>
    )
}

CustomAvatar.propTypes = {
    sizes:PropTypes.string,
}
CustomAvatar.defaultProps={
    sizes:'10rem'
}
export default CustomAvatar
