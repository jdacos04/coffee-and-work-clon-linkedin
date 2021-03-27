import React from 'react'
import {Text,View,Image,TextInput} from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'

export default class Register extends React.Component{

    render(){
        const{navigate} =this.props.navigation
        return(
            <View style = {{backgroundColor:"#FFF",height:"100%"}}>
                <Image source={require('../images/registro.jpg')}
                style = {{width:"100%",height:"40%"}}
                />
            
                
            <Text style={{
                fontFamily:"SemiBold",
                marginHorizontal:55,
                textAlign:"center",
            
                opacity:0.5
                
            }}> Por favor rellena todos los campos </Text>
             <View style={{ 
                 flexDirection : 'row',
                 alignItems:'center',
                 marginHorizontal:10,
                 borderWidth:2,
                 marginTop:15,
                 paddingHorizontal:10,
                 borderColor:"#51D1F6",
                 borderRadius:23,
                 paddingVertical:2
                 
             }}>
                 <Icon name="smile-circle" color="#51D1F6" size= {24} /> 
                <TextInput placeholder="Nombre"
                style={{paddingHorizontal:10,}}
            
                />
                </View>
                <View style={{ 
                    
                 flexDirection : 'row',
                 alignItems:'center',
                 marginHorizontal:10,
                 borderWidth:2,
                 marginTop:15,
                 paddingHorizontal:10,
                 borderColor:"#51D1F6",
                 borderRadius:23,
                 paddingVertical:2
                 
             }}>
                 <Icon name="smileo" color="#51D1F6" size= {24} /> 
                <TextInput
                placeholder="Apellido"
                style={{paddingHorizontal:10}}
                />
                </View>
                <View style={{ 
                 flexDirection : 'row',
                 alignItems:'center',
                 marginHorizontal:10,
                 borderWidth:2,
                 marginTop:15,
                 paddingHorizontal:10,
                 borderColor:"#51D1F6",
                 borderRadius:23,
                 paddingVertical:2
                 
             }}>
                 <Icon name="mail" color="#51D1F6" size= {24} /> 
                <TextInput placeholder="Email"
                style={{paddingHorizontal:10}}
                />
                </View>
                <View style={{ 
                    
                    flexDirection : 'row',
                    alignItems:'center',
                    marginHorizontal:10,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#51D1F6",
                    borderRadius:23,
                    paddingVertical:2
                    
                }}>
                    <Icon name="idcard" color="#51D1F6" size= {24} /> 
                   <TextInput placeholder=" Numero de Identficacion"
                   style={{paddingHorizontal:10}}
                   />
                   </View>
                   <View style={{ 
                    flexDirection : 'row',
                    alignItems:'center',
                    marginHorizontal:10,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#51D1F6",
                    borderRadius:23,
                    paddingVertical:2
                    
                }}>
                    <Icon name="lock" color="#51D1F6" size= {24} /> 
                   <TextInput placeholder="Password"
                   secureTextEntry
                   style={{paddingHorizontal:10}}
                   />
                   </View>
                <View style={{ 
                 flexDirection : 'row',
                 alignItems:'center',
                 marginHorizontal:10,
                 borderWidth:2,
                 marginTop:15,
                 paddingHorizontal:10,
                 borderColor:"#51D1F6",
                 borderRadius:23,
                 paddingVertical:2
                 
             }}>
                 <Icon name="lock1" color="#51D1F6" size= {24} /> 
                <TextInput placeholder="Confirm Password"
                secureTextEntry
                style={{paddingHorizontal:10}}
                />
                </View>
                <View style={{ 
                 flexDirection : 'row',
                 alignItems:'center',
                 marginHorizontal:10,
                 borderWidth:2,
                 marginTop:15,
                 paddingHorizontal:10,
                 borderColor:"#51D1F6",
                 borderRadius:23,
                 paddingVertical:2
                 
             }}>
                 <Icon name="mobile1" color="#51D1F6" size= {24} /> 
                <TextInput placeholder="Nuemro telefonico"
                style={{paddingHorizontal:10}}
                />
                </View>
                

                <View style={{
                      flexDirection : 'row',
                      alignItems:'center',
                      marginHorizontal:120,
                      borderWidth:2,
                      marginTop:20,
                      justifyContent:"center",
                      backgroundColor:"#51D1F6",
                      borderRadius:23,
                      paddingVertical:2
                }}>
                    
                    <Text
                    onPress={()=>navigate('ScreenConfirm')}
                     style={{
                        color:"white",
                        fontFamily:"SemiBold"
                        
                    }}>
                        Registrase 
                    </Text>
                </View>
    
            </View> 
           
        )
    }






}