import styled from 'styled-components'
import { FIELDS } from '../../constants/theme'
import TYPOGRAPHY from '../../constants/typography'

const themeSwitcher = (color, disabled, outlined) => {
    if (outlined) return 'transparent'
    if (disabled) return FIELDS.DISABLED
    return color ?
        FIELDS[color.toUpperCase()] || FIELDS.PRIMARY :
        FIELDS.PRIMARY
}

export const ButtonStyled = styled.div`
    background: ${({ color, disabled, outlined }) => themeSwitcher(color, disabled, outlined)};
    padding: ${({ outlined, small }) => {
        if (small && outlined) return '7px'
        if (small) return '10px'
        if (outlined) return '11px 18px'
        return '14px 18px'
    }};
    width: max-content;
    border-radius: ${({ round }) => round ? '50px' : '5px'};
    color: ${({ outlined, color, disabled }) => !outlined ? FIELDS.TEXT : themeSwitcher(color, disabled)};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    -webkit-appearance: none;
    border: ${({ outlined, color, disabled }) => !outlined ? 'none' : `3px ${themeSwitcher(color, disabled)} solid` };
    font-size: ${({ small }) => small ? TYPOGRAPHY.SIZE.SUBTEXT : TYPOGRAPHY.SIZE.TEXT};

    &:hover {
        box-shadow: 0px 7px 13px -5px ${({ color, disabled, outlined }) => themeSwitcher(color, disabled, outlined)};
        -webkit-box-shadow: 0px 7px 13px -5px ${({ color, disabled, outlined }) => themeSwitcher(color, disabled, outlined)};
        transform: translateY(-4px);
    }
    &:active {
        box-shadow: none;
        transform: translateY(0px);
    }
`