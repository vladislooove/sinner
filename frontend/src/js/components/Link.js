import React from 'react'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <li><span className="filter__item filter__item--active">{ children }</span></li>
    }

    return (
        <li>
            <a
                href="#"
                className="filter__item"
                onClick={e => {
                    e.preventDefault()
                    onClick()
                }}
            >
                {children}
            </a>
        </li>
    )
}

export default Link