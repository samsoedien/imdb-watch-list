import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FilmItem from '../FilmItem'
import { IFilm } from '../Films'

const StyledFilmList = styled.div``

export interface IFilmListProps {
  films: IFilm[]
}

const FilmList: React.FC<IFilmListProps> = ({ films }) => {
  return (
    <ul className="smdn-film-list" data-test="film-list-component">
      {films.map((film, index) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </ul>
  )
}

FilmList.propTypes = {
  films: PropTypes.any.isRequired,
}

export default FilmList
