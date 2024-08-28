import { useEffect, useState } from "react"

const categoriesLink = 'https://api.escuelajs.co/api/v1/categories?limit=5'


const fetchData = async() => {
  const request = await fetch(categoriesLink)

  if (request.status >= 400) {throw new Error('Network error... Couldn\'t fetch')}

}
const getImgUrl = async (link) => {

  let request = await fetch (link)
  if (request.status >= 400) {throw new Error('Network error')}

  let blob = await request.blob()

  let url = URL.createObjectURL(blob)
  console.log(url)
  return url

}

const useGetWelcomeImages = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const request = fetch(categoriesLink)

  useEffect(() => {

    const fetchData = async () => {

      const request = await fetch(categoriesLink)

      if (request.status >= 400) {throw new Error('Network error... Couldn\'t fetch')}

      let rawData = await request.json()
      console.log(rawData)

      let transformedData = await Promise.all(
        rawData.map (
          async (instance) => {
            let url = await getImgUrl(instance.image)
            let newObj = Object.assign({}, instance, {image: url})
            return newObj
          }
        )
      )
      console.log(transformedData)
      setData(transformedData)
      setLoading(false)
    }

    fetchData().catch(error => setError(error))

  },[])


  return {data, error, loading}
}



export default useGetWelcomeImages
