import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

import FilmList from './FilmList'
import SearchBar from '../../components/SearchBar'

const StyledFilms = styled.div``

export interface IFilm {
  actors?: string[]
  Title: string
  Poster: string
}

// const filmsMockup: IFilm[] = [
//   { actors: ['actor1, actors2'], Title: 'movie1' },
//   { actors: ['actor3, actors4'], Title: 'movie2' },
//   { actors: ['actor5, actors6'], Title: 'movie3' },
//   { actors: ['actor7, actors8'], Title: 'movie4' },
//   { actors: ['actor9, actors10'], Title: 'movie5' },
// ]

export interface IFilmsProps {}

const Films: React.FC<IFilmsProps> = () => {
  const [films, setFilms] = useState<any>()
  const [searchValue, setSearchValue] = useState<string>('avengers')

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=186be766')
      const result = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=186be766`)
      setFilms(result.data.Search)
    }
    fetchData()
    console.log('films', films)
  }, [])

  const getSearchValue = (searchValue: string) => {
    console.log('searchValue', searchValue)
  }

  const submitSearchResult = () => {
    setSearchValue(searchValue)
    console.log(searchValue)
  }

  console.log('films', films)
  return (
    <div className="smdn-films" data-test="films-component">
      <div className="container">
        <div className="row">
          <SearchBar
            onChangeCallback={(val: string) => getSearchValue(val)}
            submitSearchCallback={submitSearchResult}
          />
        </div>
        {/* <FilmList films={filmsMockup} /> */}
        <FilmList films={films} />
      </div>
    </div>
  )
}

Films.propTypes = {}

export default Films
