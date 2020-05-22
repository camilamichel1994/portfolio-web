import React from 'react'
import PropTypes from 'prop-types'
import {
    PostsTabStyled,
} from './PostsTabStyled'

const PostsTab = props => {
    
    return (
        <PostsTabStyled theme={props.theme}>
            Posts Tab
        </PostsTabStyled>
    )
}

PostsTab.propTypes = {
    theme: PropTypes.object.isRequired,
}

export default PostsTab

