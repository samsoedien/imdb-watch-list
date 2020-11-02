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
    <div className="row">
      <ul className="smdn-film-list" data-test="film-list-component">
        {films ? (
          <div className="row">
            {films.map((film: IFilm, index) => (
              <FilmItem key={index} film={film} />
            ))}
            )
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </ul>
    </div>
  )
}

FilmList.propTypes = {
  films: PropTypes.any,
}

export default FilmList
