/* eslint-disable array-callback-return */

function Tours({ data }) {
    return (
        <>
            {
                data.map((city, index) => {
                    return (
                        <div key={index}>
                            <p>{city.name}</p>
                            <img src={city.image} alt={city.image} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Tours;