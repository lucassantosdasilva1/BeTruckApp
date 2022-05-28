import React from 'react';
import { Rating } from 'react-native-ratings';

import {
  Container,
  WrapPhoto,
  Photo,
  WrapInfos,
  WrapTitleOptionsType,
  WrapTitleType,
  Title,
  Type,
  WrapOptions,
  Options,
  WrapDescription,
  Description,
  WrapRatingPrice,
  WrapRate,
  Price,
  RateComponent,
} from './styles';

export function ProductCard() {
  const arrai = new Array(5);
  const [rating, setRating] = React.useState([]);

  const Data = {
    title: "Brown eggs",
    type: "dairy",
    description: "Raw organic brown eggs in a basket",
    filename: "0.jpg",
    height: 600,
    width: 400,
    price: 28.1,
    rate: 4

  }

  return (
    <Container>
      <WrapPhoto>
        <Photo source={ require("../../assets/0.jpg")} />
      </WrapPhoto>
      
      <WrapInfos>
        <WrapTitleOptionsType>
          <WrapTitleType>
            <Title>
              {Data.title}
            </Title>

            <Type>
              {Data.type}
            </Type>
          </WrapTitleType>
          
          <WrapOptions>
            <Options>
            ...
            </Options>
          </WrapOptions>
        </WrapTitleOptionsType>

        <WrapDescription>
          <Description>
            {Data.description}
          </Description>
        </WrapDescription>


        <WrapRatingPrice>
            <WrapRate>
              {
                
                function nome() {
                    for(let i = 0; i < 6; i++) {
                      <RateComponent name='star' size={24} color='black'/>
                    }
                }             
                
              }
            </WrapRate>

            <Price>
              R$ {Data.price}
            </Price>
          
        </WrapRatingPrice>

      </WrapInfos>
    </Container>
  );
}