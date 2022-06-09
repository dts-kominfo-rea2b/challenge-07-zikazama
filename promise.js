const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  const hasil = await promiseTheaterIXX();
  const hasil2 = await promiseTheaterVGC();
  const result = [...hasil, ...hasil2].filter((item) => item.hasil === emotion);
  return result.length;
};

module.exports = {
  promiseOutput,
};
