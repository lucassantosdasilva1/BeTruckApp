import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Layout, Spinner } from "@ui-kitten/components";

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
  const [products, setProducts] = useState<DTO[] | undefined>([]);
  const [isLoading, setisLoading] = useState(true);
  const [gate, setGate] = useState("false");

  const dispatch = useDispatch();

  const dataStore: DTO[] = useSelector(
    (state: RootState) => state.reducersList.dataSliceReducer.data
  );

  async function setProduct() {
    try {
      var data = await getProducts();
      dispatch(setDataAction(data));
    
      console.log("products: ", products);
    } catch (error) {

      console.error(error);

    } finally {
      setProducts(data);
      setisLoading(false);

    }
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

          <Layout
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >

            <Spinner status="basic" />
          </Layout>

        ) 
        
        : 
        
        (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
            data={products}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductCard dataOfApi={item} gateFunc={handleRefresh} />
            )}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={setProduct} />
            }

          />
        )}
      </Container>
    </Layout>
  );
}
