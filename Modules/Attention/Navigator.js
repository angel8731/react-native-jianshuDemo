import React, {
    AppRegistry,
    Component,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Navigator
    } from 'react-native';

import AttentionPage from './index.js';

var AttentionIndex  = React.createClass({

    render : function(){

        return (
            <Navigator
                tintColor='#cccccc'
                barTintColor='#cccccc'
                initialRoute={{name : 'AttentionPage', component : AttentionPage}}
                //configureScene= {(route)=> {
                //  let  gestureType = Navigator.SceneConfigs.HorizontalSwipeJump;
                //  gestureType.gestures.jumpForward=null;
                //  return gestureType
                //}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} {...route} navigator={navigator} ref="AttentionPage" />
                }}
            >
            </Navigator>
        );
    }

});

module.exports = AttentionIndex;