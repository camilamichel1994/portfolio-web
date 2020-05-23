import React from 'react'
import styled from 'styled-components'

const ListView = () => (
    <Skeleton>
        <Row>
            <Icon />
            <InfoWrapper>
                <Title />
                <Description />
            </InfoWrapper>
        </Row>
        <Row>
            <Icon />
            <InfoWrapper>
                <Title />
                <Description />
            </InfoWrapper>
        </Row>
        <Row>
            <Icon />
            <InfoWrapper>
                <Title />
                <Description />
            </InfoWrapper>
        </Row>
        <Row>
            <Icon />
            <InfoWrapper>
                <Title />
                <Description />
            </InfoWrapper>
        </Row>
    </Skeleton>
)

const Skeleton = styled.div`
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    margin: 5px 0px;
    display: flex;
    flex-direction: row;
`

const Icon = styled.div`
    height: 15px;
    width: 15px;
    background: lightgrey;
`

const Title = styled.div`
    height: 8px;
    width: 60px;
    background: lightgrey;
`

const Description = styled.div`
    height: 20px;
    width: 120px;
    background: lightgrey;
    margin-top: 5px;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

export default ListView
