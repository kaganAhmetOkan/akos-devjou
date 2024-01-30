import trimWhitespace from "./trimWhitespace"

export default function toPostID(str: string) {
  return trimWhitespace(str).toLocaleLowerCase();
};