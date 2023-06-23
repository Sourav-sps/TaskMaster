import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Props {
  container: ViewStyle;
  contentContainerStyle: ViewStyle;
  content: ViewStyle;
  input: TextStyle;
  label: TextStyle;
  inputContainer: ViewStyle;
  btnContainer: ViewStyle;
  btn: ViewStyle;
}
const styles = StyleSheet.create<Props>({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#ffffff',
  },
  contentContainerStyle: {
    borderWidth: 2,
    borderColor: '#16f7ac',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  content: {
    paddingHorizontal: '5%',
    paddingVertical: '8%',
  },
  input: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 8,
  },
  label: {
    fontSize: 16,
    color: '#000000',
  },
  inputContainer: {
    marginTop: 10,
  },
  btnContainer: {
    marginTop: '10%',
  },
  btn: {
    backgroundColor: '#16f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
});
export default styles;
