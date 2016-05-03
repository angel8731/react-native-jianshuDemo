import React ,{
    View,
    Text,
    StyleSheet
    } from 'react-native';

var MyselfPage = React.createClass({

    render : function(){

        return (
            <View style={[styles.container]}>
                <Text>Myself</Text>
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

module.exports = MyselfPage;
