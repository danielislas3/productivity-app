import { useState } from 'react';
import moment from 'moment';
moment().format();

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    console.log('====================================');
    console.log(values);
    console.log('====================================');

    if (target.type == 'select-one') {
      typeToTime(target.value);
      setValues({
        ...values,
        [target.name]: target.value,
        min: typeToTime(target.value).min,
        hor: typeToTime(target.value).hor,
        duration: typeToTime(target.value).duration,
      });
    } else {
      setValues({
        ...values,
        [target.name]: target.value,
        duration: moment(0)
          .add(values.min, 'minutes')
          .add(values.hor, 'hours')
          .valueOf(),
      });
    }
  };
  const typeToTime = type => {
    let hor = 0,
      min = 0,
      duration = 0;
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
    duration = moment(0).add(min, 'minutes').add(hor, 'hours').valueOf();

    return {
      hor,
      min,
      duration,
    };
  };

  return [values, handleInputChange, reset];
};
