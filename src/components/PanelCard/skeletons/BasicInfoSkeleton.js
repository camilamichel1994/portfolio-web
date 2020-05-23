import React from 'react'
import styled from 'styled-components'

const BasicInfoSkeleton = () => (
    <Skeleton>
        <Line>
            <Field width="60px" />
            <Field width="40px"  />
            <Field width="40px"  />
        </Line>
        <Line>
            <Field width="120px" />
        </Line>
        <Line>
            <Field width="40px"  />
            <Field width="60px" />
            <Field width="40px"  />
        </Line>
        <Line>
            <Field width="170px" height="30px" />
        </Line>
    </Skeleton>
)

const Skeleton = styled.div`
    display: flex;
    flex-direction: column;
`

const Field = styled.div`
    height: ${({ height }) => height ? height : '10px'};
    width: ${({ width }) => width};
    background: lightgrey;
    margin: 5px 0px;
`

const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0px;
`

export default BasicInfoSkeleton
