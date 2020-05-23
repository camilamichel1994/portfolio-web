import styled from 'styled-components'
import TYPOGRAPHY from '../../constants/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colorSwitcher = (theme, isValid) => isValid ? theme.TEXT : theme.FIELDS.DANGER

export const InputStyled = styled.div`
    border: ${({ theme, isValid }) => `3px ${colorSwitcher(theme, isValid)} solid`};
    width: ${(width) => width ? width : ''};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${({ theme }) => theme.BACKGROUND};
    justify-content: ${({ startIcon, endIcon }) => {
        if (startIcon) return 'flex-start'
        if (endIcon) return 'flex-end'
    }};
`

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Label = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTEXT};
    color: ${({ theme, isValid }) => colorSwitcher(theme, isValid)};
    font-weight: 500;
    margin: 0px 0px 8px 3px;
`

export const Helper = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTEXT};
    color: ${({ theme, isValid }) => colorSwitcher(theme, isValid)};
    margin: 8px 0px 0px 3px;
`

export const ErrorMessage = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.SUBTEXT};
    color: ${({ theme }) => theme.FIELDS.DANGER};
    margin: 8px 0px 0px 3px;
`

export const InputNative = styled.input`
    padding: 11px;
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    outline: none;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.BACKGROUND};
    width: 100%;
    box-sizing: border-box;
`

export const RequiredSign = styled.div`
    color: ${({ theme }) => theme.FIELDS.DANGER};
    font-weight: bold;
    font-size: ${TYPOGRAPHY.SIZE.TEXT};
    margin-left: 5px;
`

export const LabelRequiredWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StartIcon = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
    color: ${({ theme, isvalid }) => colorSwitcher(theme, isvalid === 'true')};
    padding-left: 10px;
`

export const EndIcon = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
    color: ${({ theme, isvalid }) => colorSwitcher(theme, isvalid === 'true')};
    padding-right: 10px;
`