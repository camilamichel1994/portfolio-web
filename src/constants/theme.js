export const COLORS = {
    PRIMARY: '#E12F5F',
    SECONDARY: '#A12244',
    DARKENED: '#A12244',
    DIMMED: 'rgba(225, 45, 93, 0.10)',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY: '#D8DCE6',
    GREY_DARKER: '#6E767D',
    DARK: '#192734',
    DARKER: '#15202B',
    GREEN: '#129A7D',
    RED: '#D92027',
    YELLOW: '#fff8a6',
    BLUE: '#1B6CA8',
    CYAN: '#0E9AA7',
    PURPLE: '#5c2a9d',
    ORANGE: '#fc7e2f',
    PINK: '#eb6383',
    BROWN: '#7c3c21',
    CLEAR: '#F6F8FA',
    LAVANDER: '#726A95',
    LEMON: '#BBEAA6',
    MOSS: '#445c3c',
    SUNSET: '#f46060',
    MUSTARD: '#D1A958',
    BLUE_LIGHT: '#6886c5',
}

export const FIELDS = {
    TEXT: COLORS.WHITE,
    PRIMARY: COLORS.PRIMARY,
    SECONDARY: COLORS.SECONDARY,
    SUCCESS: COLORS.GREEN,
    DANGER: COLORS.RED,
    WARNING: COLORS.YELLOW,
    DISABLED: COLORS.GREY,
}

const DARK = {
    NAME: 'DARK',
    PRIMARY: COLORS.DARKENED,
    TITLE: COLORS.WHITE,
    BACKGROUND: COLORS.DARKER,
    TEXT: COLORS.GREY,
    DIMMED: COLORS.DIMMED,
    CARD_BACKGROUND: COLORS.DARK,
    DISABLED: COLORS.GREY_DARKER,
    FIELDS: {...FIELDS},
}

const MIDNIGHT = {
    NAME: 'MIDNIGHT',
    PRIMARY: COLORS.DARKENED,
    TITLE: COLORS.WHITE,
    BACKGROUND: COLORS.BLACK,
    TEXT: COLORS.GREY_DARKER,
    DIMMED: COLORS.DIMMED,
    CARD_BACKGROUND: COLORS.BLACK,
    DISABLED: COLORS.GREY_DARKER,
    FIELDS: {...FIELDS},
}

const LIGHT = {
    NAME: 'LIGHT',
    PRIMARY: COLORS.PRIMARY,
    TITLE: COLORS.BLACK,
    BACKGROUND: COLORS.CLEAR,
    TEXT: COLORS.DARK,
    DIMMED: COLORS.DIMMED,
    CARD_BACKGROUND: COLORS.WHITE,
    DISABLED: COLORS.GREY,
    FIELDS: {...FIELDS},
}

export const THEME_NAME = {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
    MIDNIGHT: 'MIDNIGHT',
}

const THEME = {
    DARK,
    LIGHT,
    MIDNIGHT,
}

export default THEME