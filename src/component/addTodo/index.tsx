//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToDo, updateTodo} from '../../todoStore/reducer/todoReducer';
import styles from './style';
import {AppDispatch} from '../../todoStore/store';

let rand = function () {
  return Math.random().toString(36);
};

let token = function () {
  return rand() + rand();
};

// create a component
const AddTodo = ({route: {params}}: any) => {
  const item = params?.item || null;

  const {setOptions, pop} = useNavigation<any>();
  const [state, setState] = useState<any>({
    text: '',
    date: '',
  });

  useEffect(() => {
    if (item) {
      setOptions({
        title: 'Update Todo',
      });
      setState({
        ...item,
      });
    }
  }, [item]);

  const dispatch = useDispatch<AppDispatch>();
  const goback = () =>
    setTimeout(() => {
      pop();
    }, 100);

  const _addTodo = () => {
    if (!state.text) {
      Alert.alert('Please enter your text');
    } else if (!state.date) {
      Alert.alert('Please enter your date');
    } else {
      dispatch(addToDo({...state, isCompleted: false, id: token()}));
      goback();
    }
  };

  const _updateTodo = () => {
    if (!state.text) {
      Alert.alert('Please enter your text');
    } else if (!state.date) {
      Alert.alert('Please enter your date');
    } else {
      dispatch(updateTodo(state));
      goback();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainerStyle}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Label</Text>
            <TextInput
              value={state.text}
              onChangeText={(text: string) =>
                setState({
                  ...state,
                  text,
                })
              }
              placeholder="Enter the text"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date</Text>
            <TextInput
              value={state.date}
              onChangeText={(text: string) =>
                setState({
                  ...state,
                  date: text,
                })
              }
              placeholder="DD-MM-YYYY"
              style={styles.input}
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => (item ? _updateTodo() : _addTodo())}>
              <View style={styles.btn}>
                <Text style={styles.label}>
                  {item ? `Update Task` : `Add Task`}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default AddTodo;
