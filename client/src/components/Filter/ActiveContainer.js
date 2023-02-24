import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InputFilter, Input } from './InputFilter'
import { DropdownFilter } from './DropdownFilter'
import { CheckBoxFilter } from './CheckBoxFilter'

export const ActiveContainer = ({ type, data, min, max, inputText, limit, active }) => {
    const [values, setValues] = useState({ value1: undefined, value2: undefined })

    useEffect(() => {
        if (values.value1 > values.value2) {
            setValues({ value1: values.value2, value2: values.value1 });
        }
    }, [values])

    const setType = (containerType) => {
        switch (containerType) {
            case "checkbox":
                return (
                    <CheckBoxFilter data={data} limit={limit} />
                )
            case "inputs":
                return (
                    <SubContainer>
                        <StyledInputFilter
                            contextmin={min}
                            contextmax={max}
                            validedValue={values.value1}
                            onValue={(value) => { setValues((prev) => { return { ...prev, value1: value } }) }}
                            placeholderText="від" /> -
                        <StyledInputFilter
                            contextmin={min}
                            contextmax={max}
                            validedValue={values.value2}
                            onValue={(value) => { setValues((prev) => { return { ...prev, value2: value } }) }}
                            placeholderText="до" />
                        {inputText ? inputText : ""}
                    </SubContainer>
                )
            case "dropdowns":
                return (
                    <SubContainer>
                        <DropdownFilter
                            data={data}
                            validedValue={values.value1}
                            onValue={(value) => { setValues((prev) => { return { ...prev, value1: value } }) }}
                            placeholderText="від" /> -
                        <DropdownFilter
                            data={data}
                            validedValue={values.value2}
                            onValue={(value) => { setValues((prev) => { return { ...prev, value2: value } }) }}
                            placeholderText="до" />
                        {inputText ? inputText : ""}
                    </SubContainer>
                )
            default:
                throw new Error("Undefined type")
        }
    }

    return (
        <Container active={active}>
            {setType(type)}
        </Container>
    )
}

const StyledInputFilter = styled(InputFilter)`
    ${Input} {
        height: 20px;
    }
`

const Container = styled.div`
    display: ${state => state.active ? "block" : "none"};
    width: 100%;
    height: max-content;
    padding: 10px 5px;
    box-sizing: border-box;
`

const SubContainer = styled.div`
    display: flex;
    gap: 10px;
`