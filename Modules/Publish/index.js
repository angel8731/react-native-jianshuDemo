import React ,{
    View,
    Text,
    StyleSheet,
    LayoutAnimation,
    Animated
    } from 'react-native';

var PublishPage = React.createClass({
    getInitialState : function(){
        return {
            bounceValue : new Animated.Value(0)
        }
    },
    render : function(){

        return (
            <Animated.View style={[styles.container,{
                flex: 1,
                transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                    {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                ]
            }]}>
                <Text>publish</Text>
            </Animated.View>
        );
    },
    componentDidMount : function(){
        this.state.bounceValue.setValue(1.5);
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();
    },
    _onpress : function(){
        LayoutAnimation.configureNext({
            duration: 500,   //持续时间
            create: {
                type: 'linear',
                property: 'scaleXY'
            },
            update: {
                type: 'spring',
                springDamping: 0.4
            }
        });
    }
});

var styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 20,
        backgroundColor : '#333'
    }
});

module.exports = PublishPage;
