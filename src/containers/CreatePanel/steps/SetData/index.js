import React, { useState } from 'react'
import {
    SetDataStyled,
    Title,
} from './SetDataStyled'

const SetData = ({ theme }) => {

    return (
        <SetDataStyled>
            <Title theme={theme}>TO DO</Title>
        </SetDataStyled>
    )
}

export default SetData

