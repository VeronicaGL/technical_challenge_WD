import React, { useEffect, useState } from "react";
import apiService from "../service/api.server";

const ListPhone = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getAllPhones();
        setDatos(response);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de la API</h1>
      <ul>
        {datos.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPhone;