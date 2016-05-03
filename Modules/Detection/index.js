/**
 * 简书APP关注
 */
import React,{
    Component,
    Text,
    View,
    ScrollView,
    StyleSheet
    } from 'react-native';

var DetectionPage = React.createClass({

    render : function(){
        return (
            <View style={styles.container}>
                <Text>关注</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({

    container : {
        flex : 1,
        marginTop:20
    }
});

module.exports = DetectionPage;