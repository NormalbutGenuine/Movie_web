import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams() // path parameter
    const [load, setLoad] = useState(false)
    const [description, setDescription] = useState([])
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setDescription((description) => json.data)
        setLoad(true)
    }
    useEffect(() => {
        getMovie()

    }, [])
    
    return (
        <div>
            {load === false ? <h1>Loading</h1> : (
                <div>
                    <h1>Detail</h1>
                    <h2>title : {description.movie.title}</h2>
                    <img src={description.movie.background_image} />
                    <p>description : {description.movie.description_full}</p>
                </div>
            )}
        </div>
    )
}

export default Detail