import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <footer className="footer" >
        <div className="footer__title">
            Show:
        </div>
        <ul className="filter">
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </ul>
    </footer>
)

export default Footer