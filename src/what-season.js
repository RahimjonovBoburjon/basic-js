let seasons = ['winter', 'spring', 'summer', 'fall', 'winter'];

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!Date.parse(date)) {
    throw new Error('Invalid date!');
  }

  try {
    date.getUTCSeconds()
  } catch { 
    throw new Error('Invalid date!')
  };

  let month = date.getUTCMonth();

  return seasons[parseInt((month + 1) / 3)];
}

module.exports = {
  getSeason
};
