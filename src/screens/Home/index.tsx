import React, { useEffect, useState } from "react";
import {FlatList} from 'react-native'
import { Button, Layout, Text } from "@ui-kitten/components";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard";

import { Container } from "./styles";
import { DTO, getProducts } from "../../services";
import { Loading } from "../../components/Loading";

export function Home() {

  const [products, setProducts] = useState<DTO[] | undefined>([]);
  const [isLoading, setisLoading] = useState(true);

  async function setProduct() {
    try {
      const data = await getProducts().then();  
      setProducts(data);
    } catch (error) {
      console.log(error)
    } finally {
      setisLoading(false);
    }
    
  }

  useEffect(() => {
    setProduct();
  },[])

  return (
    <Layout>
      <Container>
        <Header />
        { isLoading ? <Loading/> :
              <FlatList 
              showsVerticalScrollIndicator={false}
              style={{width: '100%'}}
              data={products} 
              keyExtractor={(item, index) => index.toString()} 
              renderItem={({item}) => <ProductCard data={item}/>} />
        }
       
      </Container>
    </Layout>
  );
}