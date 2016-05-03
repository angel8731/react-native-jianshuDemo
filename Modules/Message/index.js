import React ,{
    View,
    Text,
    StyleSheet
    } from 'react-native';

var MessagePage = React.createClass({

    render : function(){

        return (
            <View style={[styles.container]}>
                <Text>MessagePage</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 20
    }
});

module.exports = MessagePage;
