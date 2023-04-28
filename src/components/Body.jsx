import { useEffect, useState } from "react";
import { RestrauntsCard } from "./RestrauntsCard/RestrauntsCard";
import { RESTAURANT_DATA } from "../mock/data";
import { Shimmer } from "./ShimmerUi/Shimmer";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  const filterFunction = (searchText, restaurants) => {
    return restaurants.filter((data) =>
      data.data.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const serchBtnHandler = () => {
    let filter = filterFunction(searchText, restaurants);
    return setFilteredData(filter);
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&offset=31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards);
    setFilteredData(json?.data?.cards);
  }

  return (
    <div className="App">
      <div className="App-body">
        <div>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={serchBtnHandler}>Search</button>
        </div>
      </div>
      <div className="bodyCards">
        {restaurants.length === 0 ? (
          <Shimmer />
        ) : filteredData.length === 0 ? (
          <h1>No data found</h1>
        ) : (
          filteredData.map((data) => {
            return (
              <div>
                <RestrauntsCard {...data.data} key={data.data.id} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export { Body };
