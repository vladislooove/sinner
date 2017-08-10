import React from 'react'

import sinsCategories from '../data/sinsCategories'

const AddSins = () => (
    <div className="add-sins">
        <div className="add-sins__group">
            <div className="add-sins__title">
                What have you done wrong?
            </div>
            <input className="add-sins__input"
                   placeholder="For example 'lied'" />
        </div>
        <div className="add-sins__group">
            <div className="add-sins__title">
                What kind of sin have you done?
            </div>
            <select name="categories">
                {sinsCategories.map((el) =>(
                    <option key={el.circle}>
                       {el.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="add-sins__group">
            <button className="add-sins__submit">
                OK
            </button>
        </div>
    </div>
)

export default AddSins;