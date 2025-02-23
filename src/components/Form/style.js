import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#fff",
        alignItems:"center",
        marginTop:0,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        justifyContent: "space-around",
        paddingTop:15,
    },

    form: {
        width:"100%",
        paddingTop:0
    },

    formLabel: {
        color:"#000",
        fontSize:18,
        paddingLeft:20,
    },

    input: {
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        padding:10,
    },

    buttonCalculator: {
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
    },

    textButtonCalculator: {
        color:"#fff",
        fontSize:20
    },

    errorMessage: {
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
        fontSize: 12,
    },

    exhibitionResultImc: {
        width:"100%",
        height:"50%"
    },

    resultImcItem: {
        fontSize:26,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },

    textResultItemList: {
        fontSize:16
    }
});

export default styles