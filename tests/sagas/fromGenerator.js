export default function (generator) {
  return (...args) => generator.next(...args).value
}
