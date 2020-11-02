import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BACKGROUND_IMG from '../../../assets/img/movie-918655_1920.jpg'

const StyledHeroBanner = styled.header`
  position: relative;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: 40vh;
  overflow: hidden;
  background-image: url(${BACKGROUND_IMG});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25));
`

const StyledHeading = styled.h2`
  color: #fff;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  font-size: 60px;
`

export interface IHeroBannerProps {}

const HeroBanner: React.FC<IHeroBannerProps> = () => {
  return (
    <StyledHeroBanner className="smdn-hero-banner" data-test="hero-banner-component">
      <StyledOverlay>
        <StyledHeading>IMDB Watch List</StyledHeading>
      </StyledOverlay>
    </StyledHeroBanner>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
