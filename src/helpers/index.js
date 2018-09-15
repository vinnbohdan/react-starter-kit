import _ from 'lodash';

export const buildQuery = params =>
  Object.keys(params)
    .reduce((a, k) => {
      if (!_.isEmpty(k) && params[k] !== undefined) {
        a.push(`${k}=${encodeURIComponent(params[k])}`);
      }

      return a;
    }, [])
    .join('&');
export const objectToQueryString = obj => {
  const results = [];
  _.forOwn(obj, (value, key) => {
    if (Array.isArray(value)) {
      _.forOwn(value, elemvalue => {
        results.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(elemvalue)}`,
        );
      });
    } else {
      results.push(`${key}=${value}`);
    }
  });
  return results.join('&');
};
export const isLoggedIn = user => !!(user && user.user && user.user.id);
