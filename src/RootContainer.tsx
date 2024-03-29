import { gql, useQuery } from '@apollo/client';
import * as React from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const fetchBooksQuery = gql`
  query ExampleQuery {
    games {
      id
      title
      platform
    }
  }
`;

type ItemProps = {title: string; platform: []; id: string};

const Item = ({title, platform, id}: ItemProps) => (
  <View key={id} style={styles.flatListContainer}>
    <Text style={styles.txtNameStyle}>{title}</Text>
    <Text>{platform.toString()}</Text>
  </View>
);

const RootContainer = () => {
  const {loading, error, data} = useQuery(fetchBooksQuery);
  console.log(error);
  console.log(data?.games);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Welcome to Apollo Client</Text>
      <FlatList
        style={styles.flatListContainer}
        data={data?.games}
        keyExtractor={({item}) => item?.id}
        renderItem={({item}) => (
          <Item title={item?.title} platform={item?.platform} id={item?.id} />
        )}
      />
      <ActivityIndicator animating={loading} />
    </View>
  );
};

export default RootContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
  flatListContainer: {
    margin: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    color: '#345454',
    marginLeft: 20,
    fontSize: 40,
  },
  txtNameStyle: {
    fontWeight: 'bold',
    color: '#343434',
    fontSize: 30,
  },
});
