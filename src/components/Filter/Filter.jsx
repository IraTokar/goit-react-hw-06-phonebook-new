import React from "react";
import {FilterLabel, FilterInput} from './Filter.styled'

function Filter({ value, onChangeFilter}) {
    return (
        <div>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    value={value}
                    onChange={onChangeFilter}/>
            </FilterLabel>
             
        </div>
    )
};

export default Filter;