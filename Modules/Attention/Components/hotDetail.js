import React, {
    View,
    Text,
    StyleSheet
    } from 'react-native';

import NavigationBar from 'react-native-navbar';

var hotDetail = React.createClass({
    getInitialState : function(){
        console.log(this.props);
        return {}
    },
    render : function(){
        const rightButtonConfig = {
            title: 'Next',
            handler: () => alert('hello!'),
        };

        return (
            <View style={[styles.container]}>
                <NavigationBar
                title={{title : '热门详情',tintColor: '#E78170'}}
                statusBar={{
                    style : 'light-content',
                    showAnimation : 'fade'
                }}
                leftButton={{title : '返回',handler : this.props.onRightButtonPress}}/>
                <Text>hotDetail</Text>
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
module.exports = hotDetail;