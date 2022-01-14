const selectAmount = (string) => {
  const sanitizeChar = string.replace(/\./g, '');
  const listOfNumbers = sanitizeChar.match(/\d+/g);
  const amount = parseInt(listOfNumbers[0], 10);
  window.location.assign(`/checkout?amount=${amount}`);
};

export default selectAmount;