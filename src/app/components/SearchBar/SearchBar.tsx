import React, { useState, ChangeEvent, FormEvent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 32px 0;
  height: 48px;
`

const StyledSearchBar = styled.input`
  height: 48px;
  text-indent: 12px;
  font-size: 18px;
  border: 0;
  border-radius: 6px;
  background-color: #e0e7eb;
  color: black;
  &:focus {
    outline: none;
  }
`

const StyledSearchIcon = styled.button`
  right: 0;
  top: 0;
  outline: none;
  border: none;
  height: 48px;
  width: 48px;
  border-radius: 0 3px 3px 0;
  border: 2px solid #e0e7eb;
  background-color: #e0e7eb;
  &:focus {
    outline: none;
  }
  position: absolute;
  z-index: 1000;
  right: 0;
`

export interface ISearchBarProps {
  onChangeCallback: (searchValue: string) => void
  submitSearchCallback: (e: FormEvent) => void
}

const SearchBar: React.FC<ISearchBarProps> = ({ onChangeCallback, submitSearchCallback }) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    onChangeCallback(searchValue)
  }

  return (
    <StyledForm onSubmit={(e: FormEvent) => submitSearchCallback(e)}>
      <StyledSearchBar
        type="search"
        placeholder="Search Movies..."
        className="smdn-search-bar form-control"
        data-test="search-bar-component"
        onChange={(e) => handleOnChange(e)}
        value={searchValue}
      />
      <StyledSearchIcon type="submit">
        <i className="fa fa-search" />
      </StyledSearchIcon>
    </StyledForm>
  )
}

SearchBar.propTypes = {}

export default SearchBar
