import SaleCard from '@/components/cards/salecard/salcard'
import Container from '@/components/container/container'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Head from 'next/head'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/ganecard/gamecard'
import { useState } from 'react'
import NavBar from '@/components/NavBar/NavBar'

export default function Home() {

  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    
    setCart([...cart, info])
  }

  const HandleRemoveProdutc = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  const [searchTerm, setSearchTerm] = useState('')

  const HandleSearchTerm = (event) => {
    console.log('Valor digitado:', event.target.value); 
    setSearchTerm(event.target.value); 
  };

  const games = [
    {
      image: 'league-of-legends.jpg',
      name: 'League of Legends',
      price: 79.99,
      discount: '-20%',
      fullprice: 'R$ 99,99',
      discountprice: 'R$ 79,99'
    },
    {
      image: 'dota-2.jpg',
      name: 'Dota 2',
      price: 79.99,
      discount: '-20%',
      fullprice: 'R$ 99,99',
      discountprice: 'R$ 79,99'
    },
    {
      image: 'valorant.jpg',
      name: 'Valorant',
      price: 79.99,
      discount: '-20%',
      fullprice: 'R$ 99,99',
      discountprice: 'R$ 79,99'
    },
    {
      image: 'The-Last-of-Us-Part-1.webp',
      name: 'The Last Of Us - Parte 1',
      type: 'Ação, aventura e sobrevivência',
      price: 309.99
    },

    {
      image: 'The-Last-of-Us-Part-2.webp',
      name: 'The Last Of Us - Parte 2',
      type: 'Ação, aventura e sobrevivência',
      price: 309.99
    },
    
    {
      image: 'counter-strike.jpg',
      name: 'Counter Strike Global Offensive',
      type: 'Tiro em primeira pessoa',
      price: 309.99
    }
  ];

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm)
  );

  const games2 = [
    {
      image: 'The-Last-of-Us-Part-1.webp',
      name: 'The Last Of Us - Parte 1',
      type: 'Ação, aventura e sobrevivência',
      price: 309.99
    },

    {
      image: 'The-Last-of-Us-Part-2.webp',
      name: 'The Last Of Us - Parte 2',
      type: 'Ação, aventura e sobrevivência',
      price: 309.99
    },
    
    {
      image: 'counter-strike.jpg',
      name: 'Counter Strike Global Offensive',
      type: 'Tiro em primeira pessoa',
      price: 309.99
    }
  ];

  const filteredGames2 = games2.filter(game =>
    game.name.toLowerCase().includes(searchTerm)
  );

  

  
  
  
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar
          cart={cart}
          onRemove={HandleRemoveProdutc}
          searchTerm={searchTerm}
          handleSearchTerm={HandleSearchTerm}
        />
        <Container>
          <div className={styles.session}>
            <Subtitle>Meus jogos</Subtitle>
            <div className={styles.salecontainer}>
              {(filteredGames.length > 0 ? filteredGames : games).map((game, index) => (
                  <SaleCard
                    key={index}
                    image={game.image}
                    discount={game.discount}
                    fullprice={game.fullprice}
                    discountprice={game.discountprice}
                    onAdd={() => handleAddProduct(game)}
                  />
                ))}
              
              {(filteredGames2.length > 0 ? filteredGames2 : games2).map((game, index) => (
                <GameCard 
                key={index}
                image={game.image}
                name={game.name}
                type={game.type}
                price={game.price}
                onAdd={() => handleAddProduct(game)}
                
                />

              ))}
                       
              
              
             
            </div>
          </div>
          
        </Container>
        
        
      </div>
    </>
  )
}
