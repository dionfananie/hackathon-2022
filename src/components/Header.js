import React from 'react';
import { WiredInput, WiredCard,WiredSearchInput} from 'wired-elements';
import { WiredIconButton } from 'wired-elements/lib/wired-icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return ( 
    <div>
        <div className='header'>
            <wired-search-input className="search" placeholder="Cari disini"></wired-search-input>
            <wired-icon-button>
            <FontAwesomeIcon icon={faHeart} />
            </wired-icon-button>
            <wired-icon-button>
            <FontAwesomeIcon icon={faHeart} />
            </wired-icon-button>
            <wired-icon-button>
            <FontAwesomeIcon icon={faHeart} />
            </wired-icon-button>
        </div>
        <div>
      
            {/* <wired-card class="payment">asasas</wired-card> */}
        </div>
    </div> );
}
 
export default Header;