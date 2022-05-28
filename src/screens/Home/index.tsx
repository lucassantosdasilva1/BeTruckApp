import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { Header } from '../../components/Header/Header';
import { ProductCard } from '../../components/ProductCard';

import {
  Container
} from './styles';

export function Home() {
  return (
    <Layout>
        <Container>
            <Header/>
            
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Container>
    </Layout>
  );
}
/*



const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      CANCEL
    </Button>
    <Button
      style={styles.footerControl}
      size='small'>
      ACCEPT
    </Button>
  </View>
);

export const CardAccessoriesShowcase = () => (
  <React.Fragment>
    <Layout style={styles.topContainer} level='1'>

      <Card style={styles.card} header={Header}>
        <Text>With Header</Text>
      </Card>

      <Card style={styles.card} footer={Footer}>
        <Text>With Footer</Text>
      </Card>

    </Layout>

    <Card style={styles.card} header={Header} footer={Footer}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent
      </Text>
    </Card>

  </React.Fragment>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});*/