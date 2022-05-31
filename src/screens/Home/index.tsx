import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Layout } from "@ui-kitten/components";

import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard";
import { Loading } from "../../components/Loading";

import { DTO, DTOsemid, getProducts } from "../../services";

import { setDataAction } from "../../redux/dataSlice";
import { useDispatch } from "react-redux";
import { store, RootState } from "../../redux/index";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export function Home() {
//  const [products, setProducts] = useState<DTO[] | undefined>([]);
  const [isLoading, setisLoading] = useState(false);
  const [gate, setGate] = useState("false");

  
  const dispatch = useDispatch();

  const data : DTO[] = useSelector(
    (state: RootState) => state.reducersList.dataSliceReducer.data
  );

  async function setProduct() {
    console.log("setProduct");
    const data = await getProducts();

  //  setProducts(data);
    dispatch(setDataAction(data));
  } 

  function handleRefresh() {
    setGate("");
    setProduct();
  }

  useEffect(() => {
    setProduct();
  }, []);

  return (
    <Layout>
      <Container>
        <Header />
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ProductCard dataOfApi={item} gateFunc={handleRefresh}/>}
          />
        )}
      </Container>
    </Layout>
  );
}
