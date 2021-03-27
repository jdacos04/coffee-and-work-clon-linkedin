import React from 'react'
import {Text,View,Image,TextInput} from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'

export default class Home extends React.Component{

    render(){
        const{navigate} =this.props.navigation
        return(
            <View style = {{backgroundColor:"#FFF",height:"100%"}}>
                <Image source={require('../images/kingvsgod.jpg')}
                style = {{width:"100%",height:"40%"}}
                />
            <Text style={{ 
            fontSize:30,
            fontFamily:"SemiBold",
            alignSelf:"center"}}>
                Quien ganara </Text>
                
            
             
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
                        King Kong
                    </Text>
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
                        Godzilla
                    </Text>
                </View>

                
    
    
            </View> 
           
        )
    }






}