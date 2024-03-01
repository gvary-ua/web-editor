import { useEffect, useId, useRef, useState } from 'react';

export default function Input({ type = 'text', label = '', validator, disabled, ...props }) {
  // For controlling input
  const [inputValue, setInputValue] = useState('');

  // Input settings
  const [valid, setValid] = useState(null); // Success = true, error = false, '' = null or = false (if empty when validate)
  const [errorText, setErrorText] = useState(''); // Description under input
  const [iconPath, setIconPath] = useState(''); // Icon substitution
  const inputRef = useRef(null); // To change the input type
  const inputId = useId();

  // To show/hide the password is in the input
  const [isPassShow, setIsPassShow] = useState(false);

  // Text validation handler
  const onValidate = (inputDate) => {
    const [validateRes, subLabelText] = validator(inputDate);
    setErrorText(subLabelText);
    setValid(validateRes);
  };

  // Input status check and pre-setting
  useEffect(() => {
    setIconPath('');
  }, []);

  // Settings for displaying icons
  useEffect(() => {
    if (type === 'password') {
      if (isPassShow) {
        setIconPath('./icons/show_hide-show.svg');
        inputRef.current.type = 'text';
      } else {
        setIconPath('./icons/show_hide-hide.svg');
        inputRef.current.type = 'password';
      }
    } else {
      if (valid === false) {
        setIconPath('./icons/Union.svg');
      } else {
        setIconPath('');
      }
    }
  }, [isPassShow, valid, type]);

  return (
    <label
      htmlFor={inputId}
      className={`box-border inline-flex max-h-20 cursor-pointer flex-col items-start font-robotoFlex font-medium leading-5 ${disabled === true ? 'opacity-40' : ''}`}
    >
      <div>{label}</div>

      <div
        className={`mt-1 box-border flex h-10 w-96 flex-row items-center justify-between rounded-lg bg-surface-2 px-4 font-normal ${valid ? 'border border-success' : valid === false ? 'border border-error' : ''}`}
      >
        <input
          type={isPassShow ? 'text' : 'password'}
          id={inputId}
          onChange={(e) => {
            setInputValue(e.target.value);
            onValidate(e.target.value);
          }}
          value={inputValue}
          ref={inputRef}
          className="mr-2 w-full bg-surface-2 font-robotoFlex outline-none"
          disabled={disabled}
          {...props}
        />
        {iconPath ? (
          <img
            src={iconPath}
            onClick={() => {
              if (type === 'password' && !disabled) setIsPassShow((prev) => !prev);
            }}
            alt={
              type !== 'password'
                ? `${type.charAt(0).toUpperCase() + type.slice(1) + ' error'}`
                : `${isPassShow ? 'Hide' : 'Show'} password`
            }
          />
        ) : (
          ''
        )}
      </div>
      <span className="font-robotoFlex text-xs font-medium text-error">{errorText}</span>
    </label>
  );
}

{
  /*
    An example of using the button:

    <Input type="password" label="Password:" validator={validatePassword} disabled />

    The type can be specified only when a password is required.
    The disabled can be specified only when a input must be disabled and without attribute.
  */
}
