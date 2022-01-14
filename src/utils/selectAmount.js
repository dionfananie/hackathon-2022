const defaultText = 'Jangan pelit-pelit om, tambah dikit lah!';
const listAmount = ['15000', '25000', '30000', '40000', '50000', '75000'];

const selectAmount = (string) => {
  console.log(string)
  const sanitizeChar = string.replace( /^\D+/g, '').replace(/\./g, '');
  const listOfNumbers = sanitizeChar.match(/\d+/g) || [];
  if (listOfNumbers.length && listOfNumbers[0] && listAmount.includes(listOfNumbers[0])) {
    window.location.assign(`/checkout?amount=${listOfNumbers[0]}`);
    return
  }

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(defaultText);
  utterThis.lang = "id";

  synth.speak(utterThis);
};

export default selectAmount;
