import React from 'react';
import Card from '../components/Card'
import THEME, { COLORS } from '../constants/theme'
import ELEVATION from '../constants/elevation'


export default {
    title: 'Card',
    component: Card,
}

export const Default = () => <Card title="teste" spaced  theme={THEME.LIGHT}  elevation={ELEVATION[1]} />

export const WithTitle = () => 
<Card title="Meu nome é Camila" theme={THEME.LIGHT}  elevation={ELEVATION[1]}> 
    Segundo teste 
</Card>

export const WithSpaced = () => <Card  spaced  theme={THEME.LIGHT}  elevation={ELEVATION[1]}> Sem padding </Card>

export const ThemeLight = () => <Card  title="TEMA LIGHT" spaced  theme={THEME.LIGHT}  elevation={ELEVATION[1]} />

export const ThemeDark = () => <Card  title="TEMA ESCURO" spaced  theme={THEME.DARK}  elevation={ELEVATION[1]} />

export const ThemeMidnight = () => <Card  title="TEMA MIDNIGHT" spaced  theme={THEME.MIDNIGHT}  elevation={ELEVATION[1]} />

export const Elevation2WithTitle = () => <Card  title="Elevation 2" spaced  theme={THEME.LIGHT}  elevation={ELEVATION[2]} />

export const Elevation3WithTitle = () => <Card  title="Elevation 3" spaced  theme={THEME.LIGHT}  elevation={ELEVATION[3]} />

export const Elevation4WithTitle = () => <Card title="Elevation 4" spaced  theme={THEME.LIGHT}  elevation={ELEVATION[4]} />

export const WithHeight = () => <Card  title="TEMA ESCURO"   height="300px" theme={THEME.DARK}  elevation={ELEVATION[1]} />



