import React, { useEffect, useState } from 'react';
import { EditProps, sendEditProduct } from '../../../services';

// import { Question } from '../CreatePost/styles';

// import { EditPostAPI, EditProps } from '../../services/api';

import {
  Container,
  ContainerPostCreation,
  TitleWrap,
  ContentWrap,
  Label,
  TitleInput,
  ContentInput,
  Footer,
  Button,
  ButtonText,
} from './styles';

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
    const [priceValue, setPriceValue] = useState(price);
    
    let dataToSent : EditProps = {
        title: titleValue,
        type: typeValue,
        price: priceValue,
    }
    
    function handlePost(){
        closeModal();
        sendEditProduct(id, dataToSent);
    }    

    return (
    <Container>
        <ContainerPostCreation>
            {/* <Question>What's on your mind?</Question> */}

            <Label>Title</Label>
            <TitleWrap>
                <TitleInput placeholder="Type your post title here" onChangeText={setTitleValue}>{titleValue}</TitleInput>
            </TitleWrap>

            <Label>Content</Label>
            <ContentWrap>
                <ContentInput placeholder="Content here" textAlignVertical="top" multiline onChangeText={setTypeValue}>{typeValue}</ContentInput>
            </ContentWrap>

            <Footer>
                <Button onPress={() => handlePost()}>
                    <ButtonText>Editar</ButtonText>
                </Button>
            </Footer>
        </ContainerPostCreation>
    </Container>
  );
}