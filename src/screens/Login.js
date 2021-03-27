import React from 'react'
import {Text,View,Image,TextInput} from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'

export default class Login extends React.Component{

    render(){
        const{navigate} =this.props.navigation
        return(
            <View style = {{backgroundColor:"#FFF",height:"100%"}}>
                <Image source={require('../images/coffee.jpg')}
                style = {{width:"100%",height:"40%"}}
                />
            <Text style={{ 
            fontSize:30,
            fontFamily:"SemiBold",
            alignSelf:"center"}}>
                Coffee and work</Text>
                
            <Text style={{
                fontFamily:"SemiBold",
                marginHorizontal:55,
                textAlign:"center",
                marginTop:5,
                opacity:0.5
                
            }}> Consigue trabajo con nosotors  </Text>
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
                 <Icon name="mail" color="#51D1F6" size= {24} /> 
                <TextInput
                style={{paddingHorizontal:10}}
                />
                </View>
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
                 <Icon name="mail" color="#51D1F6" size= {24} /> 
                <TextInput
                style={{paddingHorizontal:10}}
                />
                </View>

                <View style={{
                      flexDirection : 'row',
                      alignItems:'center',
                      marginHorizontal:120,
                      borderWidth:2,
                      marginTop:50,
                      justifyContent:"center",
                      backgroundColor:"#51D1F6",
                      borderRadius:23,
                      paddingVertical:2
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>
                        Loggin
                    </Text>
                </View>

                    <Text
                    
                    onPress={()=>navigate('Register')}
                    style={{
                        alignSelf:"center",
                        color:"#51D1F6",
                        fontFamily:"SemiBold",
                        paddingVertical:30
                    }}>
                        No tienes una cuenta?,  registrate 
                    </Text>
                
    
    
            </View> 
           
        )
    }






}