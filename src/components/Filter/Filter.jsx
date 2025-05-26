import React from "react";
import { FilterLabel, FilterInput } from './Filter.styled'
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filterSlice";

const filterInputId = nanoid()

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch;

    const onChange = evt => {
        const normalizedValue = evt.target.value.toLowerCase();

        dispatch(changeFilter(normalizedValue));
    }

    return (
        <div>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    id = {filterInputId}
                />
            </FilterLabel>
             
        </div>
    )
    
}


export default Filter;