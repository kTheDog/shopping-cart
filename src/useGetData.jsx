import { useState, useEffect } from "react"

const ClientID = `da3f637dc4f2fb6`

const getUrls = async (imgLinks) => {

  let urls = await Promise.all(
    imgLinks.map(
      async (link) => {
        let img = await fetch(link)
        let blob = await img.blob()
        let url = URL.createObjectURL(blob)
        return url
      }
    )
  )
  return urls
}

const useGetData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    let fetchData = async () => {

      // let response = await fetch('https://fakestoreapi.com/products')
      let response = await fetch('https://api.escuelajs.co/api/v1/products?offset=1&limit=48')
      console.log(response)
      if (response.status >= 400) {setError(error); throw new Error('Network error... Couldn\'t fetch')}

      let data = await response.json()
      console.log(data)
      let newData = await Promise.all(data.map(async (instance) => {
        let rating = Math.random(instance.id) * 1.5 + 3.5
        rating = rating.toFixed(1)
        let imageLinks = instance.images
        let urls = await getUrls(imageLinks)
        return Object.assign({}, instance, {images: urls, rating})
      }))



      setData(newData)
      setLoading(false)
    }

    fetchData().catch(error => {setError(error); console.log(error)})

  },[])

  return {data, loading, error}
}


export default useGetData
