export default class Validator {
  validateUsername(name) {
    this.name = name;
    const nameWords = /^[a-z][\w-]*[a-z]$/i;
    const nameNum = /\d{4,}/;
    return nameWords.test(this.name) && !nameNum.test(this.name);
  }
}
