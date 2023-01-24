export const convertPrice = (dollar) => {
    let priceInDollar = dollar.replace('$', '').trim()
    let priceInNpr = priceInDollar * 118;
    return (priceInNpr.toFixed(0));
  }
export const FormatDate = (date) => {
    var givenDate = new Date(date);
    var month = givenDate.getMonth() + 1;
    var day = givenDate.getDate();
    var year = givenDate.getFullYear();
    return day + "-" + month + "-" + year;
}