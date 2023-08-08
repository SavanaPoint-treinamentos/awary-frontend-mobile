import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       fontFamily:"Lobster",
       backgroundColor:"#00001E",
       height: '100%',
       justifyContent: "center",
       alignItems: "center",
  
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 80,
    color: "#ffffff",
    marginTop:-100,
   },

   Welcome: {
    fontFamily:"Lobster",
    fontSize: 30,
    color: "#ffffff",
    marginTop:-20,
   },

   Button: {
    backgroundColor: "#9C27B0",
    padding:20,
    width:'60%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    position:"absolute",
    bottom:40,

   },

   ButtonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize:18,
        fontWeight:'bold',
   },

   image: {
      width: '50%',
      height:'70%',
   }



})

export default styles