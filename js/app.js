const digit = document.getElementById('digits');
const quote = document.getElementById('quote');

const adviceQuote = async () => {
  const res = await axios.get('https://api.adviceslip.com/advice');
  try {
    digit.textContent = res.data.slip.id;
    quote.textContent = res.data.slip.advice;
  } catch (e) {
    console.log('error', e);
  }
};
adviceQuote();
