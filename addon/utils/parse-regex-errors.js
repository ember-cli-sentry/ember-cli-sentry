export function parseRegexErrors(errors) {
  if (!errors || errors.constructor !== Array) {
    return [];
  }

  const regex = new RegExp(/^\/(.*)\/([gimuy]*)$/);
  const regexGroups = { pattern: 1, flags: 2 };

  return errors.map((error) => {
    if (typeof error && regex.test(error)) {
      let match = regex.exec(error);
      return new RegExp(match[regexGroups.pattern], match[regexGroups.flags]);
    }

    return error;
  });
}
