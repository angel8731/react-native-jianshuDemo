import React, {
    View,
    Text,
    StyleSheet,
    WebView,
    Platform,
    PixelRatio,
    Dimensions
    } from 'react-native';

import NavigationBar from 'react-native-navbar';

var hotDetail = React.createClass({
    getInitialState : function(){
        console.log(this.props.passProps.data);
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
                title={{title : "",tintColor: '#E78170'}}
                statusBar={{
                    style : 'light-content',
                    showAnimation : 'fade'
                }}
                leftButton={{
                    title : this.props.backButtonTitle,
                    handler : this.props.onRightButtonPress,
                    style : {},
                    tintColor : '#E78170',
                    icon : require('image!icon_tabbar_back'),
                    pos : 'left'
                }}
                rightButton={{
                    title : this.props.rightButtonTitle,
                    handler : this.props.onRightButtonPress,
                    style : {},
                    tintColor : '#999',
                    icon : require('image!icon_tabbar_white_more'),
                    pos : 'right'
                }}/>
                <View style={styles.content}>
                    <WebView
                        source={{uri: "http://m.yergoo.com/api/news/app/" + this.props.passProps.data.resource.id}}
                        automaticallyAdjustContentInset={false}
                        contentInset={{left:0,bottom:20,right:0}}
                        startInLoadingState={true}
                        // android
                        domStorageEnabled={true}
                        javaScriptEnabled={true}
                        //ios
                        bounces={true}
                        allowsInlineMediaPlayback={true}
                        scrollEnabled={true}
                        decelerationRate="normal"
                    />
                </View>
            </View>
        );
    }
});
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginTop: 0,
        backgroundColor:'#fff',
        width: Dimensions.get('window').width,
        flex:1,
        borderColor:'#e6e6e6',
        borderWidth: 1/PixelRatio.get()
    }
});
module.exports = hotDetail;