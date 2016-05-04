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
import Header from './Components/classificationHeader.js';
import Hot from './Components/recommendation.js';
var arrs = [1,2,3]
var AttentionPage = React.createClass({
    getInitialState : function(){
        console.log(this.props);
        return {}
    },
    render : function(){
        var headerTab = Header.headerData,
            scrollList = [];
        headerTab.map((tab,idx) => {
            var tmp = <ScrollView key={tab.key} tabLabel={tab.key} ref={tab.key}>
                         <Hot tabLabel={tab.key} title={tab.title} ref={tab.key} nav={this.props.navigator}/>
                      </ScrollView>
            scrollList.push(tmp);
        });
        return(
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <ScrollableTabView initialPage={0} locked={true} renderTabBar={() => <AttentionNavbar />}>
                        <View tabLabel="文章" style={[styles.classificationHeader,{flex : 1}]} ref='article'>
                            <ScrollableTabView  initialPage={0} renderTabBar={() => <Header.ClassificationHeader />}>
                            {scrollList}
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