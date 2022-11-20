import React, { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;

const Test = () => {
  const [studios, setStudios] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchStudios = async () => {
      try {
        setError(null);
        setStudios(null);
        setLoading(true);
        const response = await axios.get(API + "/studio/");
        setStudios(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchStudios();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!studios) return <div>no studios</div>;
  return (
    <ul>
      {studios.map((studio) => (
        <li key={studio.id}>
          {studio.name} ({studio.address})
        </li>
      ))}
    </ul>
  );
};

export default Test;
