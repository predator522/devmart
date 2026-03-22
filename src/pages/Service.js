import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Service() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const docRef = doc(db, "services", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setService(docSnap.data());
      }
    };

    fetchService();
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <div>
      <h2>{service.title}</h2>
      <p>₵{service.price}</p>
      <p>{service.desc}</p>
      <p>Seller: {service.userEmail}</p>

      <button>Buy Now</button>
    </div>
  );
}

export default Service;
