import React from 'react';
import { StyleSheet,Text,TouchableHighlight,Dimensions } from 'react-native';

export default props=>{

    const estilosBotoes=[estilos.btn]
    
    if(props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    }
        if(props.igual){
            estilosBotoes.push(estilos.btnIgual)
        }
            if(props.operacao){
                estilosBotoes.push(estilos.btnOper)
            }
                if(props.ac){
                    estilosBotoes.push(estilos.btnAC)
                }
                    if(props.bs){
                        estilosBotoes.push(estilos.btnBS)
                     }   

    return (
        <TouchableHighlight
            onPress={props.aoClicar}        
        >
            <Text style={estilosBotoes}>{props.label}</Text>    
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({   
    btn:{
            fontSize:30,
            height:Dimensions.get('window').width/4,
            width:Dimensions.get('window').width/4,
            padding:20,
            backgroundColor: "#000",
            color: '#fff',
            borderWidth:1,
            borderColor: '#777',
            textAlign:'center'
        },
        btnOper:{
            color:'#0f0',
        },
        btnIgual:{
            color:'#f00',
        },
        btnAC:{
            color:'#ff0' ,   
        },
        btnBS:{
            color:'#0ff',
        },
        btnDuplo:{
            width:(Dimensions.get('window').width/4)*2,
        }
})
