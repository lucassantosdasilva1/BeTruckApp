import React from 'react';

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
  Rating,
  Price,
} from './styles';

export function ProductCard() {

  const Data = {
    title: "Brown eggs",
    type: "dairy",
    description: "Raw organic brown eggs in a basket",
    filename: "0.jpg",
    height: 600,
    width: 400,
    price: 28.1,
    rating: 4

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
          
            <Rating>
              {Data.rating}
            </Rating>

            <Price>
              {Data.price}
            </Price>
          
        </WrapRatingPrice>

      </WrapInfos>
    </Container>
  );
}