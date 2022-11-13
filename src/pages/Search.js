
import './Search.css'

import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import React, { useState } from 'react'

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");            
  const navigate = useNavigate();     

  const search = (e) => {           //e - event
      e.preventDefault();

      dispatch({
        type: actionType.SET_SEARCH_TERM,
        term: input
      })
      navigate('/search');
  }

  return (
    <form className='search'>
        <div className='search__input'>
          <SearchIcon className="search__inputIcon" />
            <input value={input} onChange={e => setInput(e.target.value)}/>
        </div>

          <div className="search__button">
            
            <Button type="submit" onClick={search} variant="outlined">Search</Button>
          </div>

    </form>
  )
}

export default Search