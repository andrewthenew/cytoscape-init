import { TYPES } from '../constants/app.constants';

export const convertEdgesCollection = (edges) => edges.map((edge) => edge.data());

const stringsArray = (inData) => {
  if (!inData) return '-no-data-';
  const keys = Object.keys(inData).sort();

  return keys.map((key, idx) => {
    const prefix = idx > 0 ? '\n' : '';

    return `${prefix}${key}: ${inData[key]}`;
  });
}

export const showData = (data, edges, type) => {
  const dataStringsArray = stringsArray(data);

  let edgesString = '';
  if (type === TYPES.NODE && edges) {
    edgesString = `\n\nEDGES:` + edges.map((edge) => {
      return `\n\n${stringsArray(edge)}`;
    });
  }

  return dataStringsArray + edgesString;
};
