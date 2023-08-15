import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center"
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 70,
    justifyContent:"center",
    marginTop:20
  
},

myCamera: {
    width: 50,
    height: 50,
    borderRadius: 50,
    top:-25,
    left:80,
},

Inputs: {
  flex:1,
  alignItems:"center",
  marginTop:-20,
},

InputInterno: {
  display:"flex" ,
  flexDirection:"row",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 5,
  marginLeft:15,
  marginRight:15,
  paddingVertical:15,
  marginTop:20,
  backgroundColor:"#D9D9D9",      
},

InputContainer: {
  flex: 1,
  marginLeft: 10
},

button: {
  backgroundColor: "#9C27B0",
  padding:1,
  width:'40%',
  marginLeft:'auto',
  marginRight:'auto',
  borderRadius:10,
  position:"absolute",
  bottom:50,
  right:15,
},

buttonText: {
  textAlign: "center",
  lineHeight:60,
  color: '#ffffff',
  fontWeight:'bold',
  fontSize:18,
}

})

export default styles