import styled from 'styled-components'
import ELEVATION from '../../constants/elevation'
import SCREEN from '../../constants/screen'

export const PanelCardStyled = styled.div`
    background: ${({ color }) => color || 'grey'};
    width: 170px;
    height: 290px;
    border-radius: 35px;
    box-shadow: ${ELEVATION[3]};
    cursor: pointer;
    transition: all 0.3s ease 0s;
    -webkit-appearance: none;
    padding: 30px;

    &:hover {
        box-shadow: ${ELEVATION[5]};
        transform: translateY(-4px);
    }

    @media (max-width: ${SCREEN.SIZES.TABLET}) {
        width: 150px;
        height: 200px;
        padding: 30px 10px;
    }
`