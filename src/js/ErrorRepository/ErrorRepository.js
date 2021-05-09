export class ErrorRepository {
  constructor(data) {
    this.errors = new Map(data);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
