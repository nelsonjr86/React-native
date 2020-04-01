import React, {useState , useEffect} from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/componentes/ListaItem';
import AddItemArea from './src/componentes/AddItemArea';
import uuid from 'uuid/v4';
import { SwipeLisView } from 'react-native-swipe-list-view';
import ListaItemSwipe from '.src/componentes/ListaItemSwipe';

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
      newItems[items].done = !newItems[index].done;
      setItems(newItems);
    }

    const deleteItem = (index) => {
      let newItems = [...items];
      newItems = newItems.filter((it,i)=>i!index);
      setItems(newItems);
    }

    return (
        <Page>
          <AddItemArea onAdd={addNewItem} />
          <SwipeLisView 
            data={items}
            renderItem={({item, index})=><ListaItem onPress={()=>toggleDone(index)} data={item} />}
            renderHiddenItem={({item, index})=><ListaItemSwipe onDelete={()=>deleteItem(index)} />}
            leftOpenValue={50}
            disableLeftSwipe={true}
            

            keyExtractor={(item)=>item.id}
          />  
        </Page>        
    );
}
