export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number)

}
export const getUrl =(url) => {

  return `${url.pathname}${url.search}`

}
