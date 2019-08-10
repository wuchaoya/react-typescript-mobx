export default function (price: number) {
  return Math.floor(price / 100 * 100) / 100
}