import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       height: '100%',
       backgroundColor:"#B0BEC5"   
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#0F2B3F',
    textAlign: "center",
    padding:10,
   },

   label: {
     fontSize: 18,
     color:'#409092',
     fontWeight:'bold',
     marginLeft: 10,
     marginTop: 10,
   },

   Input: {
     backgroundColor:'#E5E5E5',
     height:'15%',
     marginLeft: 10,
     marginRight: 10,
     marginTop:15,
     borderRadius:10,
     padding:15,
   },

   Button: {
    backgroundColor: "#0F2B3F",
    marginLeft: 10,
    marginRight: 10,
    height:'15%',
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

   ButtonGoogle: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#0F2B3F",
      marginLeft: 10,
      marginRight: 10,
      height:'15%',
      marginTop: 25,
     borderRadius:10,
   
   },

   ButtonTextGoogle: {
       color:"#ffffff",
       fontWeight:'bold',
       fontSize:18,
       lineHeight:70,
       textAlign: "center",
       marginLeft:35,
   },

   Icon: {
       lineHeight:70,
       fontSize:32,
       marginLeft:10,
   },

   EsqueceuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:10,

   },

   textEs: {
    fontSize: 16,
    borderBottomColor: "#5F0E66",
    // borderBottomWidth:1,
    textAlign:"right",
    marginRight:10,
    marginTop:10,

   },

   textSign: {
    fontSize: 16,
    textAlign:"center",
    marginTop:20,
   }





})

export default styles