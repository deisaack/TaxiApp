import React from "react";
import {View, Text} from "react-native";

class Home extends React.Component{

    componentDidMount() {
        this.props.setName();
        this.props.setAge();
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Hello {this.props.name}, You are {this.props.age} years old</Text>
            </View>
        );

    }
}

export default Home;
