/**
 * 简书APP首页
 */

import React,{
    Component,
    Text,
    View,
    ScrollView,
    StyleSheet
    } from 'react-native';


import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import FacebookTabBar from './Components/FackbookTabBar.js';

import AttentionNavbar from './Components/navbar.js';
import ClassificationHeader from './Components/classificationHeader.js';
import Hot from './Components/hot.js';
var AttentionPage = React.createClass({
    getInitialState : function(){
        console.log(this.props);
        return {}
    },
    render : function(){

        return(
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <ScrollableTabView initialPage={0} locked={true} renderTabBar={() => <AttentionNavbar />}>
                        <View tabLabel="文章" style={[styles.classificationHeader,{flex : 1}]} ref='article'>
                            <ScrollableTabView  initialPage={0} renderTabBar={() => <ClassificationHeader />}>
                                <ScrollView tabLabel="hot" ref="hot">
                                    <Hot tabLabel="hot" ref="hot" nav={this.props.navigator}/>
                                </ScrollView>
                                <ScrollView tabLabel="person-stalker" ref="new">
                                    <View style={styles.card}>
                                        <Text>Friends</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                                    <View style={styles.card}>
                                        <Text>Messenger</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView tabLabel="ios-world" style={styles.tabView}>
                                    <View style={styles.card}>
                                        <Text>Notifications</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView tabLabel="navicon-round" style={styles.tabView}>
                                    <View style={styles.card}>
                                        <Text>Other nav</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView tabLabel="navicon-round" style={styles.tabView}>
                                    <View style={styles.card}>
                                        <Text>Other nav</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView tabLabel="navicon-round" style={styles.tabView}>
                                    <View style={styles.card}>
                                        <Text>Other nav</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView tabLabel="navicon-round" style={styles.tabView}>
                                    <View style={styles.card}>
                                        <Text>Other nav</Text>
                                    </View>
                                </ScrollView>
                            </ScrollableTabView>
                        </View>
                        <View tabLabel="专题" style={{flex : 1}}>
                            <Text>专题</Text>
                        </View>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
});
const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 20
    },
    navbar : {
        borderBottomWidth:1,
        borderColor:'#D9D9D9'
    },
    classificationHeader : {
        backgroundColor:"#f3f3f3"
    },
    content : {
        flex : 1
    }


});

module.exports = AttentionPage;