import React from 'react';
import { WiredInput, WiredCard, WiredSearchInput} from 'wired-elements';
import { WiredIconButton } from 'wired-elements/lib/wired-icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart ,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
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
            <div className='location'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>Dikirim ke <b>Rumah Kamu with Love</b></p>
            </div>
      
         
        </div>
    </div> );
}
 
export default Header;