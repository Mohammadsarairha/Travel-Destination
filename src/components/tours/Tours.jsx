/* eslint-disable array-callback-return */
import data from '../../data/db.json';
function Tours() {
    return (
        <>
            {
                data.map(city => {
                    return (
                        <div>
                            <p>{city.name}</p>
                            <p>{city.id}</p>
                            <p>{city.info}</p>
                            <p>{city.price}</p>
                            <img src={city.image} alt={city.image} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Tours;