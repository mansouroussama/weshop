const useFetch = async (url) => {
   const res = await fetch(url)
   if (!res.ok) throw new Error('Could not fetch data!')
   const data = await res.json();
   return data
}
export default useFetch