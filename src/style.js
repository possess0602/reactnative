import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#00bfff',

    flex: 5,

    //margin: 'auto',

    flexDirection: "row",

    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    flex: 3,

    flexDirection: "row",

    backgroundColor: "#e0bfdc",

    padding: 8,

    marginVertical: 8,

    marginHorizontal: 16,
  },

  title: {
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color:"#fc2003"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  // account.js part
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  button_sign: {
    marginTop: 2,
    
    marginVertical: 2,
    
  },

});

export default styles;
