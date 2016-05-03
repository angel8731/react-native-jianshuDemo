import React, {
    AppRegistry,
    Component,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Navigator
    } from 'react-native';

import PublishPage from './index.js';

const { Dimensions } = React;

const SCREEN_HEIGHT = Dimensions.get('window').height;

var BaseConfig = Navigator.SceneConfigs.FloatFromBottom;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
    // Make it snap back really quickly after canceling pop
    snapVelocity: 8,
    // Make it so we can drag anywhere on the screen
    edgeHitWidth: SCREEN_HEIGHT
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
    // A very tighly wound spring will make this transition fast
    springTension: 100,
    springFriction: 1,
    // Use our custom gesture defined above
    gestures: {
        pop: CustomLeftToRightGesture
    }
});


var PublishIndex  = React.createClass({
    _configureScene : function(route) {
        return CustomSceneConfig;
    },
    render : function(){

        return (
            <Navigator
                tintColor='#cccccc'
                barTintColor='#cccccc'
                initialRoute={{name : 'PublishPage', component : PublishPage}}
                //configureScene= {(route)=> {
                //  let  gestureType = Navigator.SceneConfigs.FloatFromBottom;
                //  gestureType.gestures.jumpForward=null;
                //  return gestureType
                //}}
                configureScene={this._configureScene}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} {...route} navigator={navigator} ref="PublishPage" />
                }}
            >
            </Navigator>
        );
    }

});

module.exports = PublishIndex;