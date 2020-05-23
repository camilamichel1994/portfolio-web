import React from 'react'
import PropTypes from 'prop-types'
import ProgressBarsSkeleton from './skeletons/ProgressBarsSkeleton'
import PillCollectionSkeleton from './skeletons/PillCollectionSkeleton'
import BasicInfoSkeleton from './skeletons/BasicInfoSkeleton'
import ListViewSkeleton from './skeletons/ListViewSkeleton'
import {
    PanelCardStyled
} from './PanelCardStyled'

const PanelCard = props => (
    <PanelCardStyled color={props.color}>
        { renderSkeleton(props.alias) }
    </PanelCardStyled>
)

const renderSkeleton = alias => {
    switch (alias) {
        case 'progress_bars':
            return <ProgressBarsSkeleton />
        case 'pill_collection':
            return <PillCollectionSkeleton />
        case 'basic_info':
            return <BasicInfoSkeleton />
        case 'list_view':
            return <ListViewSkeleton />
        default:
            return ''
    }
}

PanelCard.propTypes = {
    color: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
}

export default PanelCard

