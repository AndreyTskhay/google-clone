import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import {useGoogleSearch} from '../useGoogleSearch';
import { Link } from 'react-router-dom';

import Search from './Search';

// import response from './response';
// import SearchIcon from "@material-ui/icons/Search";
// import DescriptionIcon from "@material-ui/icons/Description";
// import ImageIcon from "@material-ui/icons/Image";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import RoomIcon from "@material-ui/icons/Room";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    //The Google API call
    const { data } = useGoogleSearch(term); 

    // const  data = response; -- fake api call for testing
    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                    <img className="searchPage__logo"
                    src="https://theme.zdassets.com/theme_assets/11496506/453206e3112f9714b34b167c5fd70fd13fd43ba7.png"
                    alt=""
                    />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search />
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime}) 
                        for {term}
                    </p>

                    {data?.items.map(item=> (
                        <div className='searchPage__result'>
                            <a href={item.link}>
                                <img className="searchPage__resultImage"
                                src={ item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src }
                                alt=""/>
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle"
                            href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage