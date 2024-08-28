

export default function Welcome(props) {

  let {data, error, loading} = props.fetchState
  if (loading) {return <div>Loading...</div>}


  return (
    <div>
      Welcome,
      <img src={data[0].image}></img>
    </div>
  )

}
