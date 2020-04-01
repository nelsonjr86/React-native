import React, {useState , useEffect} from 'react';
import styled from 'styled-components/native';
import Header from './src/componentes/Header';
import lista from './src/lista';
import ListaItem from './src/componentes/ListaItem';
import AddItemArea from './src/componentes/AddItemArea';
import uuid from 'uuid/v4';

const Page = styled.SafeAreaView`
    flex:1;
`;
const Listagem = styled.FlatList`
    flex:1;
`;

export default () => {
    const [items, setItems] = useState(lista);

    const addNewItem = (txt) => {
      let newItems = [...items];
      newItems.push({
        id:uuid(),
        task:txt,
        done:false
      });
      setItems(newItems);
    }

    const toggleDone = (index) => {
      let newItems = [...items];
      newItems[items].done !=newItems[index].done;
      setItems(newItems);
    }

    return (
        <Page>
          <AddItemArea />
          <Listagem 
            data={lista}
            renderItem={({item, index})=><ListaItem onPress={()=>toggleDone(index)} data={item} />}
            keyExtractor={(item)=>item.id}
          />  
        </Page>        
    );
}
