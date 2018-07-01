const RE_ARG = /\{([0-9a-zA-Z_]+)\}/g;

export default function template(str, ...args) {
  if (!args) {
    return str;
  }

  return str.replace(RE_ARG, (match, i, index) => {
    if (str[index - 1] === '{' && str[index + match.length] === '}') {
      return i;
    }

    const val = args[i];
    return (val === null || val === undefined) ? '' : val;
  });
}
