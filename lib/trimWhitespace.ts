export default function trimWhitespace(str: string, replacement: string = "-") {
  return str.trim().replaceAll(" ", replacement);
};