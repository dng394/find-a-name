import React from 'react';
import './Header.css';


const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src="https://assets-global.website-files.com/61a05ff14c09ecacc06eec05/61f59bf7a12842ac1ff2847e_How_to_Generate_a_Transcript_For_a_Youtube__2.png"
                className={`head-image ${headerExpanded
                    ? 'head-image-expanded'
                    : 'head-image-contracted'
                    }`}
                alt="headerImage"
            />
            <h1 className={`head-text ${headerExpanded
                ? 'head-text-expanded'
                : 'head-text-contracted'
                }`}>{headTitle}</h1>
        </div>
    );
};

export default Header;
