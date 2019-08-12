import {useState, useCallback} from 'react';


function ChangeHook(initialValue: any) {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback((value) => {
    setValue(value);
  }, []);
  
  return {
    value,
    onChange,
  };
}

export default ChangeHook;
