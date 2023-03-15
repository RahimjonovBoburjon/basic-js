function createDreamTeam(members) {
  return Array.isArray(members) ? members.filter(el => typeof el === 'string').map(el => el.replace(/\s/g, '')[0].toUpperCase()).sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
