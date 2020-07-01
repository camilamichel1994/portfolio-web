import styled from 'styled-components'
import { FIELDS, THEME_NAME } from '../../constants/theme'
import TYPOGRAPHY from '../../constants/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getBackground = (color, disabled, outlined, theme) => {
    if (outlined) return 'transparent'
    if (disabled) return theme.DISABLED
    return color ?
        FIELDS[color.toUpperCase()] || theme.PRIMARY :
        theme.PRIMARY
}

const getColor = (color, disabled, outlined, theme) => {
    if (outlined === 'true') return color ? FIELDS[color.toUpperCase()] : theme.PRIMARY
    if (disabled) return theme.CARD_BACKGROUND
    return color ? FIELDS[color.toUpperCase()] : theme.CARD_BACKGROUND
}

const getPadding = (outlined, small, title, icon) => {
    if (!title && icon) {
        if (outlined) return '11px'
        return '13px'
    }
    if (small && outlined) return '7px'
    if (small) return '10px'
    if (outlined) return '11px 18px'
    return '13px 18px'
}

const getShadow = (color, disabled, outlined, theme) => {
    return (
        (theme.NAME === THEME_NAME.MIDNIGHT || theme.NAME === THEME_NAME.DARK) ?
            'none' :
            `0px 7px 13px -5px ${getBackground(color, disabled, outlined, theme)}`
    )
}

export const ButtonStyled = styled.div`
    background: ${({ color, disabled, outlined, theme }) => getBackground(color, disabled, outlined, theme)};
    padding: ${({ outlined, small, title, icon }) => getPadding(outlined, small, title, icon)};
    width: max-content;
    border-radius: ${({ round }) => round ? '50px' : '5px'};
    color: ${({ disabled, outlined, color, theme }) => getColor(color, disabled, outlined, theme)};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    -webkit-appearance: none;
    border: ${({ outlined, color, disabled, theme }) => !outlined ? 'none' : `3px ${getBackground(color, disabled, false, theme)} solid` };
    font-size: ${({ small }) => small ? TYPOGRAPHY.SIZE.SUBTEXT : TYPOGRAPHY.SIZE.TEXT};
    &:hover {
        box-shadow: ${({ color, disabled, outlined, theme }) => getShadow(color, disabled, outlined, theme)};
        -webkit-box-shadow: ${({ color, disabled, outlined, theme }) => getShadow(color, disabled, outlined, theme)};
        transform: translateY(-4px);
    }
    &:active {
        box-shadow: none;
        transform: translateY(0px);
    }
`

export const Icon = styled(FontAwesomeIcon).attrs({ size: '1x' })`
    color: ${({ color, outlined, disabled, theme }) => getColor(color, disabled, outlined, theme)};
    padding: ${({ title }) => title ? '0px 5px 0px 10px' : '0px'};
`