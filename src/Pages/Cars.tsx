import { useEffect, useState } from "react";
import axios from "axios";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://your-api-url.com/endpoint")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // empty array = runs once when component mounts

  return (
    <div>
      {cars.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
export default Cars;
