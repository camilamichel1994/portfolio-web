import React from 'react'
import PropTypes from 'prop-types'
import {
    CardStyled,
    CardTitle,
} from './CardStyled'

const Card = props => (
    <CardStyled theme={props.theme} elevation={props.elevation} height={props.height}>
        { props.title && <CardTitle theme={props.theme}>{props.title}</CardTitle> }
        { !!props.children && props.children }
    </CardStyled>
)

Card.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
    title: PropTypes.string,
    height: PropTypes.string,
}

Card.defaultProps = {
    elevation: '',
}

export default Card
