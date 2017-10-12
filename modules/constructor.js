export class Constructor {
  constructor(els) {
    for (let i = 0; i < els.length; i++) {
      this[i] = els[i];
    }
    this.length = els.length;
  }
}
