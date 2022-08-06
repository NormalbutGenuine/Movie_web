import { useEffect, useState } from 'react'
import Movie from '../components/Movie'
import PropTypes from "prop-types"

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
        const resp = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
        const json = await resp.json()
        setMovies((movies) => json.data.movies)
        setLoading((loading) => false)
    }
    useEffect(() => {
        getMovies()
    }, [])
    
  return (
    <div>
      {loading ? <h1>Loading..</h1> : <div>{movies.map((item, idx) => 
      <Movie key={item.id} id={item.id} medium_cover_image={item.medium_cover_image} title={item.title} summary = {item.summary} genres={item.genres}/>)}</div>}

    </div>
  )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
  }

export default Home