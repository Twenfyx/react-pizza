import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6397582377359127a034c394.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("error with request");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>"Loading..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>

      <h4>price: {pizza.price} $</h4>
    </div>
  );
};

export default FullPizza;
