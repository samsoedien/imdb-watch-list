import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IFilm } from '../Films'

const StyledFilmItem = styled.div`
  height: 240px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
  margin: 12px 0;
  padding: 24px;
  border-radius: 6px;
`

export interface IFilmItemProps {
  film: IFilm
}

const FilmItem: React.FC<IFilmItemProps> = ({ film }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <StyledFilmItem className="smdn-film-item" data-test="film-item-component">
        <h3>{film.title}</h3>
        <p>{film.actors}</p>
      </StyledFilmItem>
    </div>
  )
}

FilmItem.propTypes = {
  film: PropTypes.any.isRequired,
}

export default FilmItem
