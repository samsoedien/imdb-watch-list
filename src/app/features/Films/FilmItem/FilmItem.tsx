import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IFilm } from '../Films'

const StyledFilmItem = styled.div``

export interface IFilmItemProps {
  film: IFilm
}

const FilmItem: React.FC<IFilmItemProps> = ({ film }) => {
  return (
    <div className="smdn-film-item" data-test="film-item-component">
      {film.name}
    </div>
  )
}

FilmItem.propTypes = {
  film: PropTypes.any.isRequired,
}

export default FilmItem
