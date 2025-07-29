import { forwardRef, useEffect, useState } from "react"
import './index.css';

export const FloatingLabelInput = forwardRef(({
  type = "text", 
  placeholder, 
  label, 
  defaultValue, 
  onChange, 
  validator, 
  disabled,
  Value,
  style,
  inputStyle,
  labelStyle
}, ref) => {
    const [labelClassName, setLabelClassName] = useState("input-label");
    const [inputValidClass, setInputValidClass] = useState("");
    const [value, setValue] = useState(defaultValue || "");
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (Value) {
            setValue(Value);
            if (Value.length > 0) {
                setLabelClassName("input-label-focus");
            }
        }
    }, [Value]);

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        
        if (onChange) {
            onChange(value);
        }
        
        if (validator && touched) {
            const isValid = validator(value);
            setInputValidClass(isValid ? "" : "input-invalid");
        }
    };

    const handleFocus = () => {
        setLabelClassName("input-label-focus");
        setTouched(true);
        if (validator && value) {
            const isValid = validator(value);
            setInputValidClass(isValid ? "input-valid" : "input-invalid");
        }
    };

    const handleBlur = () => {
        if (!value) {
            setLabelClassName("input-label");
        }

        if (validator) {
            const isValid = validator(value);
            setInputValidClass(isValid ? "input-valid" : "input-invalid");
        }
    };

    return (
        <div style={{...style}} className="floating-label-input">
            <label className={labelClassName} style={{transition: "transform 0.1s ease-in-out",...labelStyle}}>
                {label}
            </label>
            <input 
                ref={ref} 
                disabled={disabled} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder} 
                value={value} 
                type={type} 
                className={`input-field ${inputValidClass}`} 
                style={{...inputStyle}}
            />
        </div>
    )
});