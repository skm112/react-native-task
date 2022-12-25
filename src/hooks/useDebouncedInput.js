import { useCallback, useState, useRef } from 'react';
import { debounce, set } from 'lodash'
export const useDebouncedInput = (defaultValue = '', timeout = 400) => {
    const [value, setValue] = useState(defaultValue);
    const ref = useRef(null);
    const debouncedValue = useCallback(debounce(setValue, timeout), [])
    const options = {
        defaultValue: defaultValue,
        onChangeText: debouncedValue,
        ref: ref
    }
    const clearValue = () => {
        ref.current?.clear()
        setValue(defaultValue)
    }
    return {
        value,
        options,
        focus: ref.current?.focus,
        blur: ref.current?.blur,
        isFocused: ref.current?.isFocused,
        clear: clearValue,
    }
}