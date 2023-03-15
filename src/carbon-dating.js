const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  let res = 0;
  return typeof(sampleActivity) === 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15 ? Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity))/(0.693 / HALF_LIFE_PERIOD)) : false;
}

module.exports = {
  dateSample
};
