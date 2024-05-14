import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Layout from './components/Layout/Layout';
import SectionDetails from './components/SectionDetails/SectionDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';

const INFO_RESTAURANTE = {
  image: "https://www.daleeeel.com/f/res/s05/locations-photos/000/819/0081979-269-rinnoo-9f537c6de8e1478b893bd18a4185fb0e.jpg",
  name: "McDonald's", location:"Punta del Este", link: "https://www.mcdonalds.com.uy",
  description: "Restaurante de comida Uruguaya", schedule: "Apertura - 12:00 hs\nCierre - 23:00 hs",
  delivery: true
}

// La constante RESTAURANTES es provisoria para simular la informacion de la base de datos.
const RESTAURANTES = [
  {image: "https://www.daleeeel.com/f/res/s05/locations-photos/000/819/0081979-269-rinnoo-9f537c6de8e1478b893bd18a4185fb0e.jpg",
  name: "McDonald's", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg",
  name: "Grill House", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://marketplace.canva.com/EADiIIVxcT4/2/0/1600w/canva-negro-la-corteza-restaurante-logo-o6NfZ-Gk69A.jpg",
  name: "El Ahumado", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://static.wixstatic.com/media/0784b1_c3d17c9b44d642c59490242ef3b9bc76~mv2.png/v1/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Restaurant-logo-04.png",
  name: "Dimple", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgk5EctTLX__7qdZLhONLYtzxO2newq69pEw&usqp=CAU",
  name: "SeaFood", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdvFOfEWoPzmI3AyhrMbOTUYiRDNwfzdsxA&usqp=CAU",
  name: "Cheff", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_6f-OZ_XD2lXyR6c6IQHdoB0cBksovrCpg&usqp=CAU",
  name: "Catering", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"}
]

// La constante SHOWS es provisoria para simular la informacion de la base de datos.
const SHOWS = [
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show1", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show2", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show3", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show4", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show5", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show6", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show7", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show8", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show9", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show10", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  }
]

function App() {
  const [restaurantes, setRestaurante]=useState([])
  const [shows, setShows]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/findAllRestaurant',{
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
      responseType: "json",
    }).then((response) => {
      setRestaurante(response.data);
      console.log('restaurantes', response.data)
    }).catch((error) => {
      setRestaurante(RESTAURANTES);
    })


    axios.get('http://localhost:3000/shows/findAllShow',{
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
      responseType: "json",
    }).then((response) => {
      setShows(response.data);
    }).catch((error) => {
      setShows(SHOWS);
    })


  } ,[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout restaurantes={restaurantes} shows={shows}/>} />
          <Route path="/restaurantes" element={<SectionDetails sectionName="restaurantes" section={restaurantes}/>} />
          <Route path="/shows" element={<SectionDetails sectionName="shows" section={shows}/>} />
          <Route path="/restaurante/mcdonalds" element={<RestaurantDetail restaurant={INFO_RESTAURANTE} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;