import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    if (target.type == 'select-one') {
      typeToTime(target.value);
      setValues({
        ...values,
        [target.name]: target.value,
        min: typeToTime(target.value).min,
        hor: typeToTime(target.value).hor,
      });
    } else {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    }
  };
  const typeToTime = type => {
    let hor, min;
    switch (type) {
      case 'corta':
        hor = 0;
        min = 30;
        break;
      case 'media':
        hor = 0;
        min = 30;
        break;
      case 'larga':
        hor = 0;
        min = 30;
        break;

      default:
        break;
    }

    return {
      hor,
      min,
    };
  };

  return [values, handleInputChange, reset];
};
