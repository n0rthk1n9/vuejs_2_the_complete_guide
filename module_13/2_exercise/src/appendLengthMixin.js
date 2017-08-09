export const appendLengthMixin = {
  computed: {
    appendLengthWithComputedPropertyFromMixin() {
      return this.text + ' (' + this.text.length + ')'
    }
  }
}
