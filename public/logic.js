// ---------- pure function search for matches --------

const search = (array, element) => array.filter((ele) => ele.startsWith(element.toLowerCase()));

module.exports.search = search;
