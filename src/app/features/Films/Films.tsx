import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

import FilmList from './FilmList'
import SearchBar from '../../components/SearchBar'

const StyledFilms = styled.div``

export interface IFilm {
  actors: string[]
  title: string
}

const filmsMockup: IFilm[] = [
  { actors: ['actor1, actors2'], title: 'movie1' },
  { actors: ['actor3, actors4'], title: 'movie2' },
  { actors: ['actor5, actors6'], title: 'movie3' },
  { actors: ['actor7, actors8'], title: 'movie4' },
  { actors: ['actor9, actors10'], title: 'movie5' },
]

export interface IFilmsProps {}

const Films: React.FC<IFilmsProps> = () => {
  const [films, setFilms] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=186be766')
      setFilms(result.data.data)
    }
    fetchData()
  }, [])

  const getSearchValue = (searchValue: string) => {
    console.log('searchValue', searchValue)
  }

  console.log('films', films)
  return (
    <div className="smdn-films" data-test="films-component">
      <div className="container">
        <div className="row">
          <SearchBar onChangeCallback={(val: string) => getSearchValue(val)} />
        </div>
        <FilmList films={filmsMockup} />
      </div>
    </div>
  )
}

Films.propTypes = {}

export default Films
