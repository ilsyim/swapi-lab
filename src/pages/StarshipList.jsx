import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStarshipList } from "../services/sw-api";





const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h3 className="ship">STAR WARS STARSHIPS</h3>
      {starshipList.length ?
      <>
      <div className="card-container">
        {starshipList.map(starship =>
            <div className="list-card">
              <Link className="link" to="/starships" state={{starship}} key={starship.index}>
                {starship.name}
              </Link><br />
            </div>
          )}
      </div>
      </>
      :
      <>
        <h4>Loading starships!</h4>
      </>
      }
    </>
  );
}

export default StarshipList;