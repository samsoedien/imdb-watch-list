import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FilmList from './FilmList'

const StyledFilms = styled.div``

export interface IFilm {
  id: number
  name: string
}

const films: IFilm[] = [
  { id: 1, name: 'movie1' },
  { id: 2, name: 'movie2' },
  { id: 3, name: 'movie3' },
]

export interface IFilmsProps {}

const Films: React.FC<IFilmsProps> = () => {
  return (
    <div className="smdn-films" data-test="films-component">
      <FilmList films={films} />
    </div>
  )
}

Films.propTypes = {}

export default Films
