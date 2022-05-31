import { Divider } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';

import * as Updates from 'expo-updates';
import { NativeModules } from "react-native";

import { EditProps, getProducts, sendEditProduct } from '../../../services';

// import { Question } from '../CreatePost/styles';

// import { EditPostAPI, EditProps } from '../../services/api';

import {
  Container,
  ContainerPostCreation,
  Body,
  Header,
  TitleHeader,
  ContentWrap,
  Label,
  ContentInput,
  Footer,
  Button,
  ButtonText,
} from './styles';
import { useDispatch } from 'react-redux';
import { setDataAction } from '../../../redux/dataSlice';

interface Props {
    id: number,
    title: string,
    type: string,
    price: number,
    closeModal: () => void;
}

export function EditProduct({ id, title, type, price, closeModal} : Props ) {
    const [titleValue, setTitleValue] = useState(title);
    const [typeValue, setTypeValue] = useState(type);
    const [priceValue, setPriceValue] = useState(price.toString());

    console.log("priceValue", priceValue);
    
    let dataToSent : EditProps = {
        title: titleValue,
        type: typeValue,
        price: Number(priceValue),
    }

    async function reloadApp () {
        await Updates.reloadAsync();
    }    
    
    async function handlePost(){
        //NativeModules.DevSettings.reload();
        closeModal();
        await sendEditProduct(id, dataToSent);
    }    

    function handleCancel(){
        closeModal();
    }

    return (
    <Container>
        <ContainerPostCreation>

            <Body>
                <Header>
                    <TitleHeader>Editar Produto</TitleHeader>
                    <Divider></Divider>
                </Header>
                {/* <Question>What's on your mind?</Question> */}



                <ContentWrap>
                    <Label>Title</Label>
                    <ContentInput placeholder="Type your post title here" onChangeText={setTitleValue}>{title}</ContentInput>
                </ContentWrap>

                <ContentWrap>
                    <Label>Type</Label>
                    <ContentInput placeholder="Content here" textAlignVertical="top" multiline onChangeText={setTypeValue}>{type}</ContentInput>
                </ContentWrap>

                <ContentWrap>
                    <Label>Price</Label>
                    <ContentInput placeholder="Content here" textAlignVertical="top" multiline onChangeText={setPriceValue}>{price}</ContentInput>
                </ContentWrap>
            </Body>

            <Footer>
                <Button onPress={() => handlePost()} colorBackground='#6558F5'  style={{ borderWidth: 1, marginRight: 10}}>
                    <ButtonText colorText='white'>Editar</ButtonText>
                </Button>

                <Button onPress={() => handleCancel()} colorBackground='' style={{ borderWidth: 1}}>
                    <ButtonText colorText='black'>Cancelar</ButtonText>
                </Button>
            </Footer>

            </ContainerPostCreation>
       

    </Container>
  );
}
