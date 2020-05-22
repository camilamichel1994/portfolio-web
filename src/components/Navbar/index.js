import React from 'react'
import PropTypes from 'prop-types'
import { faBell, faHome, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    NavbarStyled,
    Wrapper,
    Buttons,
    Brand,
    Icon,
    ProfileImage,
    LinkStyled,
    LinkSearch,
    SearchWrapper,
    BrandSearchWrapper,
    SearchInput,
    SearchIcon,
} from './NavbarStyled'

const Navbar = props => (
    <NavbarStyled theme={props.theme} elevation={props.elevation}>
        <Wrapper>
            <BrandSearchWrapper>
                <LinkStyled to="/">
                    <Brand theme={props.theme}>Portfolio</Brand>
                </LinkStyled>
                <SearchWrapper>
                    <SearchIcon icon={faSearch} size="lg" theme={props.theme} />
                    <SearchInput placeholder="search..." />
                </SearchWrapper>
            </BrandSearchWrapper>
            <Buttons>
                <LinkStyled to="/">
                    <Icon icon={faHome} size="lg" theme={props.theme} />
                </LinkStyled>
                <LinkSearch to="/">
                    <Icon icon={faSearch} size="lg" theme={props.theme} />
                </LinkSearch>
                <LinkStyled to="/">
                    <Icon icon={faEnvelope} size="lg" theme={props.theme} />
                </LinkStyled>
                <LinkStyled to="/">
                    <Icon icon={faBell} size="lg" theme={props.theme} />
                </LinkStyled>
                <LinkStyled to="/profile">
                    <ProfileImage theme={props.theme} image={props.user.profileImage.url} />
                </LinkStyled>
            </Buttons>
        </Wrapper>
    </NavbarStyled>
)

Navbar.propTypes = {
    theme: PropTypes.object.isRequired,
    elevation: PropTypes.string,
    user: PropTypes.object.isRequired,
}

Navbar.defaultProps = {
    elevation: '',
}

export default Navbar

