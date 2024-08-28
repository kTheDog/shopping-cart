import useGetWelcomeImages from "./useGetWelcomeImages"


export default function Welcome() {


  const {data, error, loading} = useGetWelcomeImages()

  if (loading) {return <div>Loading...</div>}
  console.log(data[0], error,loading)


  return (
    <div>
      Welcome,
      <img src={data[0].image}></img>
    </div>
  )

}
