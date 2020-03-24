import React from 'react'

export const SearchBox = ({placeholder, searchMonsters}) => {
    return (
        <div>
            <input 
                style={style} type="search"
                placeholder={placeholder} 
                onChange={searchMonsters} 
            />
        </div>
    )
}

const style = {
    WebKitAppearance: 'none',
    border: 'none',
    outline: 'none',
    padding: '10px',
    width: '150px',
    lineHeight: '30px',
    marginBottom: '30px'
}