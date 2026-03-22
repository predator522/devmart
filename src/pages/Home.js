import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getDocs(collection(db, "services"));
      setServices(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h1>DevMart 🚀</h1>

      {services.map(service => (
        <div key={service.id} style={{border: "1px solid gray", margin: 10, padding: 10}}>
          <h3>{service.title}</h3>
          <p>₵{service.price}</p>
          <p>Seller: {service.userEmail}</p>
          <Link to={`/service/${service.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
