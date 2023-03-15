function getDNSStats(domains) {
  let res = {};

  domains.forEach(domain => {
    let arr = domain.split('.').reverse();
    let key = '';

    arr.forEach(item => {
      key = key + '.' + item;
      res.hasOwnProperty(key) ? res[key]++ : res[key] = 1;
    })
  })
  
  return res;
}

module.exports = {
  getDNSStats
};
