const formatTitle = (title) => {
   const arr = title.split('-');
   if (title.split('-').length === 1) {
      return arr[0].toUpperCase() + arr.slice(1)
   } else {
      return arr.map((el, i) => (i === 0 && el[el.length - 1] === 's') ? el[0].toUpperCase() + el.slice(1, -1) + "'s" : el[0].toUpperCase() + el.slice(1)
      ).join(' ') 
   }
}
export default formatTitle