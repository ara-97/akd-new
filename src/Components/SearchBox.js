import React, { Component } from 'react';
import styled from 'styled-components';

const Search = '../../media/Components/search.png';

const SearchContainer = styled.div`
    padding: 10px;
`

const SearchWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 4.4fr;
    height: 50px;
    margin-top: 15px;
    box-shadow: 0 6px 20px 0 rgba(13,51,32,0.1);
    border-radius: 8px;
    border: 2px solid #03CA78;
    box-sizing: border-box;
`

const SearchIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchIcon = styled.img`
    height: 18px;
    width: 18px;
    padding-left: 2px;
`

const SearchInputWrapper = styled.div`
    padding: 0 10px 0 0;
`

const SearchInput = styled.input`
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: 0;
    border: 0;
    padding-left: 5px;
    &::placeholder{
        color: #A8A8A8;
        font-family: Helvetica;
        font-size: 14px;
        line-height: 40px;
        vertical-align: middle;
    }
    &:focus{
        outline: none;
    }
`


class SearchBox extends Component {
    render() {
        return (
            <SearchContainer>
                <SearchWrapper>
                    <SearchIconWrapper>
                        <SearchIcon src={Search} alt={'Search'} />
                    </SearchIconWrapper>
                    <SearchInputWrapper>
                        <SearchInput
                            placeholder="Search by Car Model e.g. WagonR"
                        />
                    </SearchInputWrapper>
                </SearchWrapper>
            </SearchContainer>
        );
    }
}

export default SearchBox;