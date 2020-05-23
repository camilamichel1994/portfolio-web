import React from 'react'
import styled from 'styled-components'

const ProgressBarsSkeleton = () => (
    <Skeleton>
        <Label />
        <Bar />
        <Label />
        <Bar />
        <Label />
        <Bar />
        <Label />
        <Bar />
    </Skeleton>
)

const Skeleton = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.div`
    height: 8px;
    width: 60px;
    background: lightgrey;
    margin: 5px 0px;
`

const Bar = styled.div`
    height: 15px;
    width: 140px;
    background: lightgrey;
    margin: 5px 0px;
`

export default ProgressBarsSkeleton
