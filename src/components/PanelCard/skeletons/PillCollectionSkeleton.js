import React from 'react'
import styled from 'styled-components'

const PillCollectionSkeleton = () => (
    <Skeleton>
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
        <Pill />
    </Skeleton>
)

const Skeleton = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Pill = styled.div`
    height: 10px;
    width: 40px;
    background: lightgrey;
    margin: 5px;
    border-radius: 5px;
`

export default PillCollectionSkeleton
