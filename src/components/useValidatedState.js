import { useEffect, useRef, useState } from "react";

export const useValidatedState = (initaialState) => {
  const componentRef = useRef(initaialState);
  const [error, setError] = useState('')
  const [state, setState] = useState(initaialState);

  const setStateWithValidation = (value) => {
    setState(value);
    if (!componentRef.current.validity.valid) {
      setError(componentRef.current.validationMessage)
    }
    else{
      setError('')
    }
  };

  useEffect(()=> setStateWithValidation(initaialState),[componentRef])
  return [state, setStateWithValidation, error, componentRef];
};
