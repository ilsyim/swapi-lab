import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../services/sw-api";
import StarshipList from "./StarshipList";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
    <div className="details-container">
    <div className="detail-card">
      <h2>Starship Details</h2>
      {starshipDetails.name ?
      <>
      <h3>Name: {starshipDetails.name}</h3>
      <h3>Model: {starshipDetails.model}</h3>
      <Link className="return" to="/">Return to Starship List</Link>
      </>
      :
      <>
      <h3>Loading starship details.</h3>
      </>
      }
    </div>
    </div>
    </>
    );
}

export default StarshipDetails;