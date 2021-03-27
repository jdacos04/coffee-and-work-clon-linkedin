import React from 'react'
import {Text,View,Image,TextInput} from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'

export default class ScreenConfirm  extends React.Component{

    render(){
        const{navigate} =this.props.navigation
        return(
            <View style = {{backgroundColor:"#FFF",height:"100%"}}>
                <Image source={require('../images/verificacion.jpg')}
                style = {{width:"100%",height:"40%"}}
                />
            
            
            <Text style={{
                fontFamily:"SemiBold",
                marginHorizontal:55,
                textAlign:"center",
                marginTop:5,
                opacity:0.5
                
            }}> Ingese el codigo de verificacion que le fue enviado por favor </Text>
             <View style={{ 
                 flexDirection : 'row',
                 alignItems:'center',
                 marginHorizontal:10,
                 borderWidth:2,
                 marginTop:50,
                 paddingHorizontal:10,
                 borderColor:"#51D1F6",
                 borderRadius:23,
                 paddingVertical:2
                 
             }}>
                 <Icon name="tag" color="#51D1F6" size= {24} /> 
                <TextInput
                style={{paddingHorizontal:10}}
                />
                </View>
                <View style={{
                      flexDirection : 'row',
                      alignItems:'center',
                      marginHorizontal:120,
                      borderWidth:2,
                      marginTop:100,
                      justifyContent:"center",
                      backgroundColor:"#51D1F6",
                      borderRadius:23,
                      paddingVertical:2
                }}>
                    
                    <Text
                    onPress={()=>navigate('Home')}
                     style={{
                        color:"white",
                        fontFamily:"SemiBold"
                        
                    }}>
                        Confirmar 
                    </Text>
                </View>
                
    
    
            </View> 
           
        )
    }
}
