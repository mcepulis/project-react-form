export function formatBasketballNumber(number, minSize = 4) {
    let strNumber = number.toString();
    let size = strNumber.length;
    return (size < minSize ? '0'.repeat(minSize - size) : '') + number;
}
