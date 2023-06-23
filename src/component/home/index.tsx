//import liraries
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useMemo, useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {StackNavType} from '../../navigation';
import {
  deleteTodo,
  setIsCompleted,
  Todo,
} from '../../todoStore/reducer/todoReducer';
import {AppDispatch} from '../../todoStore/store';
import styles from './style';

type ItemProps = {
  index: number;
  item: Todo;
};
// create a component
const Home = () => {
  const {navigate} = useNavigation<NavigationProp<StackNavType>>();
  const todoList: Todo[] = useSelector((state: any) => state.todos.list);
  const prevDate = useRef<string>();
  const sortedList = useMemo(() => {
    return [...todoList].sort(
      (a: Todo, b: Todo) =>
        new Date(b.date).valueOf() - new Date(a.date).valueOf(),
    );
  }, [todoList]);

  const dispatch = useDispatch<AppDispatch>();
  const renderDate = (date: string) => {
    if (date !== prevDate.current) {
      prevDate.current = date;
      return (
        <Text
          style={{
            marginTop: 20,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}>
          {date}
        </Text>
      );
    }
  };

  const _renderItem = ({item}: ItemProps) => {
    return (
      <>
        {renderDate(item.date)}
        <View
          style={[styles.section, item.isCompleted && {borderLeftWidth: 5}]}>
          <Text style={styles.todoText}>{item.text}</Text>

          {!item.isCompleted && (
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.actionbtn}
                onPress={() => navigate('AddScreen', {item})}>
                <Text style={styles.smalltext}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.actionbtn}
                onPress={() => dispatch(setIsCompleted({id: item.id}))}>
                <Text style={styles.smalltext}>Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.actionbtn}
                onPress={() => dispatch(deleteTodo({id: item.id}))}>
                <Text style={styles.smalltext}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{padding: '5%', paddingBottom: 50}}
        data={sortedList}
        renderItem={_renderItem}
        ListEmptyComponent={
          <Text style={{alignSelf: 'center'}}>No Task Found</Text>
        }
        keyExtractor={item => `key${item.id}}`}
      />
      <View style={styles.btnContainer}>
        <TouchableWithoutFeedback onPress={() => navigate('AddScreen')}>
          <View style={styles.btn}>
            <Text style={styles.icon}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

//make this component available to the app
export default Home;
