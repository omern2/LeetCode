



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negatif sayılar palindrom olamaz
    if (x < 0) return false;

    // Sayıyı stringe çevir
    let str = x.toString();
    // Tersini oluştur
    let reversed = str.split('').reverse().join('');

    // Aynı mı kontrol et
    return str === reversed;
};
