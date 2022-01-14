import stopwords from "../corpus/stopwords";

const removeStopwords = (string) => {
  const words = string.split(' ');
  
  const sanitizedWords = words.filter(item => !stopwords.includes(item));

  return sanitizedWords.join(' ');
};

export default removeStopwords;