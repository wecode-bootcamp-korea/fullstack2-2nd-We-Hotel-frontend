import axios from 'axios';
import { GETPRICE } from '../Contexts/constants';

export const NumberCommas = val => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getData = async ({ setFunc, url }) => {
  try {
    const data = await axios.get(url);
    if (url.includes('price')) {
      setFunc({ type: GETPRICE, prices: data.data.prices });
      return;
    }
    setFunc(data.data.data);
  } catch (e) {
    console.log(e);
  }
};

const finishLoading = func => {
  func(false);
};

export const getDataAllPromise = async ({ args, setLoading }) => {
  const funcs = args.map(item => getData(item));
  await Promise.all(funcs);
  finishLoading(setLoading);
};
