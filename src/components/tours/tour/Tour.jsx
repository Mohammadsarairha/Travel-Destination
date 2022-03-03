import { Link } from 'react-router-dom'
import "./Tour.css"
function Tour({ tour }) {

    return (
        <>
            <p>{tour.name}</p>
            <img src={tour.image} alt={tour.image} />
            <Link to={`/city/${tour.id}`}>More details</Link>
        </>
    )
}
export default Tour;