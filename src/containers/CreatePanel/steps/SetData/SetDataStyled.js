import styled from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography'
import SCREEN from '../../../../constants/screen'

export const SetDataStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    font-size: ${TYPOGRAPHY.SIZE.TITLE};
    color: ${({ theme }) => theme.TITLE};
    font-weight: 500;

    @media (max-width: ${SCREEN.SIZES.MOBILE}) {
        font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
    }
`