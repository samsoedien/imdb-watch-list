import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IFilm } from '../Films'

const StyledFilmItem = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
  margin: 12px 0;
  padding: 24px 12px;
  border-radius: 6px;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    cursor: pointer;
  }
`

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  object-fit: cover;
`

const StyledTitle = styled.h4`
  display: block;
  margin-top: 160px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 6px;
  padding-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export interface IFilmItemProps {
  film: IFilm
}

const FilmItem: React.FC<IFilmItemProps> = ({ film }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <StyledFilmItem className="smdn-film-item" data-test="film-item-component">
        <StyledImage src={film.Poster} />
        <StyledTitle title={film.Title}>{film.Title}</StyledTitle>
        <p>Personal Rating: 5</p>
      </StyledFilmItem>
    </div>
  )
}

FilmItem.propTypes = {
  film: PropTypes.any.isRequired,
}

export default FilmItem
