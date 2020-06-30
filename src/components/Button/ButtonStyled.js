import styled from 'styled-components'
import { FIELDS, THEME_NAME } from '../../constants/theme'
import TYPOGRAPHY from '../../constants/typography'

const themeSwitcher = (color, disabled, outlined, theme) => {
    if (outlined) return 'transparent'
    if (disabled) return theme.DISABLED
    return color ?
        FIELDS[color.toUpperCase()] || theme.PRIMARY :
        theme.PRIMARY
}

export const ButtonStyled = styled.div`
    background: ${({ color, disabled, outlined, theme }) => themeSwitcher(color, disabled, outlined, theme)};
    padding: ${({ outlined, small }) => {
        if (small && outlined) return '7px'
        if (small) return '10px'
        if (outlined) return '11px 18px'
        return '12px 18px'
    }};
    width: max-content;
    border-radius: ${({ round }) => round ? '50px' : '5px'};
    color: ${({ outlined, color, disabled, theme }) => !outlined ? FIELDS.TEXT : themeSwitcher(color, disabled, theme)};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    -webkit-appearance: none;
    border: ${({ outlined, color, disabled, theme }) => !outlined ? 'none' : `3px ${themeSwitcher(color, disabled, false, theme)} solid` };
    font-size: ${({ small }) => small ? TYPOGRAPHY.SIZE.SUBTEXT : TYPOGRAPHY.SIZE.TEXT};

    &:hover {
        box-shadow: ${({ color, disabled, outlined, theme }) =>
            (theme.NAME === THEME_NAME.MIDNIGHT || theme.NAME === THEME_NAME.DARK) ?
            'none' :
            `0px 7px 13px -5px ${themeSwitcher(color, disabled, outlined, theme)}`
        };
        -webkit-box-shadow: ${({ color, disabled, outlined, theme }) =>
            (theme.NAME === THEME_NAME.MIDNIGHT || theme.NAME === THEME_NAME.DARK) ?
            'none' :
            `0px 7px 13px -5px ${themeSwitcher(color, disabled, outlined, theme)}`
        };
        transform: translateY(-4px);
    }
    &:active {
        box-shadow: none;
        transform: translateY(0px);
    }
`