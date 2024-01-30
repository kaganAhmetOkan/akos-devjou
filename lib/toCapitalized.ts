export default function toCapitalized(str: string) {
  const words = str.split(" ");
  const nonPrincipalWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'with', 'as', 'at', 'by', 'of', 'in', 'to'];
  const capitalizedWords = words.map((word, index) =>
    (index === 0 || !nonPrincipalWords.includes(word.toLowerCase())) ?
    word.charAt(0).toUpperCase() + word.slice(1) : word
  );

  return capitalizedWords.join(" ");
};