import React from 'react';
import './Header.css';
const Header = ({headName, headExpand}) => {
    return(
        <div className = "head-container">
            <img 
            className = {`head-image ${headExpand ? 'head-image-expand':'head-image-contr'}`}
            src = "https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"            
            alt = "A Guy" 
            />
            <h1 className = {`head-text ${headExpand ? 
                'head-text-expand':
                'head-text-contr'}`}>{headName}</h1>
        </div>
    )
}

export default Header;