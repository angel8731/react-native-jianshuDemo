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
                title={{title : '热门详情',tintColor: '#E78170'}}
                statusBar={{
                    style : 'light-content',
                    showAnimation : 'fade'
                }}
                leftButton={{title : '返回',handler : this.props.onRightButtonPress}}/>
                <View style={{flex:1}}>
                    <View style={styles.content}>
                        <WebView
                            source={{uri: "http://m.yergoo.com/api/news/app/" + this.props.passProps.data.resource.id}}
                            automaticallyAdjustContentInset={false}
                            contentInset={{top:20,left:0,bottom:20,right:0}}
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
            </View>
        );
    }
});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    content: {
        marginTop: (Platform.OS === 'ios')? 64: 48,
        backgroundColor:'#fff',
        width: Dimensions.get('window').width,
        flex:1,
        borderColor:'#e6e6e6',
        borderWidth: 1/PixelRatio.get(),
    },

});
module.exports = hotDetail;