import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Props {
  container: ViewStyle;
  btnContainer: ViewStyle;
  btn: ViewStyle;
  icon: TextStyle;
  section: ViewStyle;
  todoText: TextStyle;
  todoDate: TextStyle;
  bottomContainer: ViewStyle;
  smalltext: TextStyle;
  actionbtn: ViewStyle;
}

const styles = StyleSheet.create<Props>({
  container: {
    flex: 1,
  },

  btnContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#16f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    fontSize: 20,
    color: '#ffffff',
  },
  section: {
    marginTop: '5%',
    backgroundColor: '#ffffff',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#94f7f7',
    borderRadius: 5,
  },
  todoText: {
    color: '#3d3d3d',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  todoDate: {
    lineHeight: 16,
    color: '#3d3d3d',
    fontSize: 12,
    fontWeight: '400',
  },
  bottomContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1f5f5',
    paddingVertical: '2%',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
  },
  smalltext: {
    fontSize: 13,
  },
});

export default styles;
