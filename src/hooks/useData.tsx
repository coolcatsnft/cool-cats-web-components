import { useState } from "react"

export function useData(initialData?: any[]) {
  const [data, setData] = useState<any[]>(initialData || []);

  const get = () => {
    return data;
  };

  const set = (value: any) => {
    return setData(value);
  };

  const reset = (value: any) => {
    return setData(initialData || []);
  };

  const push = (value: any) => {
    return _arrayMethod.call(undefined, 'push', value);
  };

  const pop = () => {
    return _arrayMethod.call(undefined, 'pop');
  };

  const _arrayMethod = (...args: any[]) => {
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array, use set instead');
    }

    const method = args.shift();
    if (typeof [][method] === 'undefined') {
      throw new Error(method + ' is not a array method');
    }

    const newData = [...data];
    newData[method](...args);
    return setData(newData);
  };

  const removeByValue = (value: any) => {
    const newData = [...data].filter((val: any) => {
      let _v1 = val as any;
      if (typeof _v1 !== 'string') {
        _v1 = JSON.stringify(_v1);
      }
      let _v2 = value as any;
      if (typeof _v2 !== 'string') {
        _v2 = JSON.stringify(_v2);
      }
      
      return _v1 !== _v2;
    });

    return setData(newData);
  };

  return {
    get,
    set,
    reset,
    push,
    pop,
    removeByValue
  }
};

export default useData;