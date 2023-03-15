function renameFiles(names) {
  let res = [];

  names.forEach(name => {
    let i = 1;

    if (!res.includes(name)) {
      res.push(name);
    } else {
      while (res.includes(`${name}(${i})`)) i++;
      res.push(`${name}(${i})`);
    }
  })
  return res;
}

module.exports = {
  renameFiles
};
