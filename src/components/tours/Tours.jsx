/* eslint-disable array-callback-return */
import Tour from "./tour/Tour";
import "./Tours.css";
function Tours({ data }) {
    return (
        <>
            {
                data.map((tour, key) => {
                    return (
                        <div className="tours" key = {key}>
                            <Tour tour={tour}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Tours;