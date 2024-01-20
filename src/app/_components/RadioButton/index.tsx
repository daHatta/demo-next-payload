import React from 'react'

import classes from './index.module.scss'

interface RadioButtonProps {
    label: string
    value: string
    isSelected: boolean
    onRadioChange: (value: string) => void
    groupName: string
}

const RadioButton = ({label, value, isSelected, onRadioChange, groupName}: RadioButtonProps) => {

    const handleRadioButtonChange = () => {
        onRadioChange(value)
    }

    return (
        <label className={classes.radioWrapper}>
            <input
                type="radio"
                checked={isSelected}
                onChange={handleRadioButtonChange}
                className={classes.radio}
                name={groupName}
            />
            {label}
        </label>
    )
}

export default RadioButton