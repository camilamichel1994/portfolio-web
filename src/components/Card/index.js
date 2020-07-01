import React from 'react'
import PropTypes from 'prop-types'
import {
    CardStyled,
    CardTitle,
} from './CardStyled'

const Card = props => (
    <CardStyled theme={props.theme} elevation={props.elevation} height={props.height} spaced={props.spaced} color={props.backgroundColor} image={props.backgroundImage}>
        { props.title && <CardTitle theme={props.theme} spaced={props.spaced}>{props.title}</CardTitle> }
        { !!props.children && props.children }
    </CardStyled>
)

Card.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
    title: PropTypes.string,
    height: PropTypes.string,
    spaced: PropTypes.bool,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
}

Card.defaultProps = {
    elevation: '',
    spaced: false,
}

export default Card
