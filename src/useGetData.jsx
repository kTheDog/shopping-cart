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
const randomRating = () => {
  let rate = Math.random() * 1.5 + 3.5
  return rate.toFixed(1)
}
const fixIDs = objArray => {
  let correcter = 0
  let newArray = objArray.map((obj) => {
    obj = Object.assign({}, obj, {id: correcter})
    correcter += 1
    return obj
  })
  return newArray
}

const useGetData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    let fetchData = async () => {

      let response = await fetch('https://api.escuelajs.co/api/v1/products?offset=1&limit=48')
      console.log(response)
      if (response.status >= 400) {setError('error'); throw new Error('Network error... Couldn\'t fetch')}

      let rawObjects = await response.json()
      console.log(data)
      let transformedData = await Promise.all(rawObjects.map(async (instance) => {
        let urls = await getUrls(instance.images)
        let rating = randomRating()
        let newProperties = {images: urls, rating}
        return Object.assign({}, instance, newProperties)
      }))
      let fixedIDs = fixIDs(transformedData)
      setData(fixedIDs)
      setLoading(false)
    }

    fetchData().catch(error => {setError(error); console.log(error)})

  },[])

  return {data, loading, error}
}


export default useGetData
