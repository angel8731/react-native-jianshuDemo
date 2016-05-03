/**
 * 首页导航组件 navbar
 * Created by wanglong on 16/4/25.
 */

import React,{
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

var AttentionNavbar = React.createClass({
    getInitialState : function(){
        return {
            selectedTab : 0
        }
    },
    componentDidMount : function(){
        this.setAnimationValue({ value: this.props.activeTab });
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },
    setAnimationValue : function(value){
        let idx = parseInt(value.value);
        this.setState({selectedTab : idx})
    },
    render : function(){
        return (
            <View style={styles.navBar}>
                <View style={styles.leftIcon}><Text>投稿</Text></View>
                <View style={styles.centerTitle}>
                    <View style={[styles.article,this.state.selectedTab == 0 ? styles.active : null]}>
                        <TouchableOpacity onScroll={() => this.navigators(0)} onPress={() => this.navigators(0)}>
                            <Text style={[this.state.selectedTab == 0 ? styles.fontActive : styles.fontSty]}>文章</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Separation}></View>
                    <View style={[styles.topic,this.state.selectedTab == 1 ? styles.active : null]}>
                        <TouchableOpacity onScroll={() => this.navigators(1)} onPress={() => this.navigators(1)}>
                            <Text style={[this.state.selectedTab == 1 ? styles.fontActive : styles.fontSty]}>专题</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rightIcon}><Text>搜索</Text></View>
            </View>
        );
    },
    navigators : function(idx){
        this.props.goToPage(idx);
    }
});

const styles = StyleSheet.create({
    navBar: {
        flex : 1,
        flexDirection: 'row',
        height : 35,
        flexWrap : 'nowrap',
        justifyContent: 'space-between'
    },
    leftIcon : {
        margin: 10
    },
    centerTitle : {
        flexDirection: 'row',
        justifyContent: 'center',
        height:35
    },
    article : {
        height:35,
        padding:10
    },
    Separation : {
        width:1,
        backgroundColor:'#D9D9D9',
        height:15,
        marginTop:10,
        marginLeft : 10,
        marginRight : 10
    },
    topic : {
        height:35,
        padding:10
    },
    fontActive : {
        fontSize:16,
        color : '#E78170'
    },
    fontSty : {
        fontSize:16,
        color : '#333'
    },
    active : {
        borderColor: '#E78170',
        borderBottomWidth:2
    },
    rightIcon : {
        margin: 10
    }

});


module.exports = AttentionNavbar;