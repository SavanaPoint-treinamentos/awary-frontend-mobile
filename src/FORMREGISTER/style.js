import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
      //  height: '100%',
       backgroundColor:"#F5F5F5",   
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#9C27B0',
    textAlign: "center",
    padding:15,
   },

   label: {
     fontSize: 18,
     fontWeight:'bold',
     marginLeft: 10,
     marginTop: 10,
   },

   Input: {
      height:'9%',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 15,
      borderRadius: 8,
      borderColor:'#000000',
      borderWidth: 1,
   },

   Input2: {
    height:'9%',
     marginLeft: 10,
     marginRight: 10,
     marginTop: 35,
     borderRadius: 8,
     borderColor:'#000000',
     borderWidth: 1,
   },

   Button: {
    backgroundColor: "#0F2B3F",
    marginLeft: 130,
    marginRight: 10,
    height:'12%',
    marginTop: 25,
    borderRadius:10,
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:70,
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:18,
   },

   EsqueceuContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop:10,
    marginLeft:20,
   },

   textEs: {
    fontSize: 16,
    borderBottomColor: "#409092",
    borderBottomWidth:1,
   }



})

export default styles