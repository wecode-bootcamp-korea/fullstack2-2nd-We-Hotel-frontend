export const _map = (func, iter) => {
  let response = [];
  for (const a of iter) {
    response.push(func(a));
  }
  return response;
};

export const _filter = (func, iter) => {
  let response = [];
  for (const a of iter) {
    if (func(a)) response.push(a);
  }
  return response;
};
