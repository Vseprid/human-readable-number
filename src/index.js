module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']


    if (number < 20) return numbers[number];

    let arrNumber = number.toString(10).split('').map(Number);

    if (number < 100) {
        let t = `${tens[arrNumber[0]]} ${numbers[arrNumber[1]]}`;
        return t.trim();
    }

    if (number < 1000) {
        if (tens[arrNumber[1]] == 'ten') {
            tens[arrNumber[1]] = '';
            let ht = `${hundreds[arrNumber[0]]} ${tens[arrNumber[1]]}${numbers[arrNumber[2] + 10]}`
            return ht.trim()
        }

        if (tens[arrNumber[1]] == '') {
            let hz = `${hundreds[arrNumber[0]]}${tens[arrNumber[1]]} ${numbers[arrNumber[2]]}`;
            return hz.trim();
        }

        let h = `${hundreds[arrNumber[0]]} ${tens[arrNumber[1]]} ${numbers[arrNumber[2]]}`
        return h.trim()
    }

}
