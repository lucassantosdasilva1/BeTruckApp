import React, { useEffect, useState } from "react";
import {FlatList} from 'react-native'
import { Button, Layout, Text } from "@ui-kitten/components";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard";

import { Container } from "./styles";
import { DTO, getProducts } from "../../services";

export function Home() {
  const [products, setProducts] = useState<DTO[]>([]);

  async function setProduct() {
    try {
      const {data} = await getProducts();
      setProducts(data);
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    setProduct();
  },[])

  return (
    <Layout>
      <Container>
        <Header />
        <FlatList 
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        data={products} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({item}) => <ProductCard data={item}/>} />
      </Container>
    </Layout>
  );
}