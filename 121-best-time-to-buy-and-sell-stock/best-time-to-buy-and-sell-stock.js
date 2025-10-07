/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Başlangıçta en düşük fiyat olarak ilk günü alıyoruz
    let minPrice = prices[0];
    // Başlangıçta hiç kâr etmedik, 0
    let maxProfit = 0;

    // Her günün fiyatını sırayla kontrol et
    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];

        // Eğer bu günkü fiyat şimdiye kadarki en düşükse güncelle
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Aksi halde bu gün satarsak ne kadar kâr olur?
            let profit = price - minPrice;
            // Eğer bu kâr, önceki en iyi kârdan fazlaysa güncelle
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    // En yüksek kârı döndür
    return maxProfit;
};
