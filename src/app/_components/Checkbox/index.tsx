import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

interface CheckboxProps {
    label: string
    value: string
    isSelected: boolean
    onClickHandler: (value: string) => void
}

const Checkbox = ({label, value, isSelected, onClickHandler}: CheckboxProps) => {
    
    const [isChecked, setIsChecked] = useState(isSelected)

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        onClickHandler(value)
    }
    
    return (
        <label className={classes.checkboxWrapper}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={classes.checkbox}
            />
            {label}
        </label>
    )
}

export default Checkbox