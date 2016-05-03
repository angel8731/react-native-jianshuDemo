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
var headerData = [
    {
        key : 'hot',
        title : '热门',
        icon : '',
        href : ''
    },
    {
        key : 'new',
        title : '新上榜',
        icon : '',
        href : ''
    },
    {
        key : 'daily',
        title : '日报',
        icon : '',
        href : ''
    },
    {
        key : 'sevenHot',
        title : '七日热门',
        icon : '',
        href : ''
    },
    {
        key : 'thirtyHot',
        title : '三十日热门',
        icon : '',
        href : ''
    },
    {
        key : 'city',
        title : '市集',
        icon : '',
        href : ''
    },
    {
        key : 'activity',
        title : '有奖活动',
        icon : '',
        href : ''
    },
    {
        key : 'publish',
        title : '简书出版',
        icon : '',
        href : ''
    }
]
var classificationHeader = React.createClass({
    getInitialState : function(){
        return {
            hotKey : 'hot'
        }
    },
    componentDidMount : function(){
        this.setAnimationValue({ value: this.props.activeTab });
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },
    setAnimationValue : function(value){
        let idx = parseInt(value.value);
        this.setState({hotKey:headerData[idx]['key']})
    },
    render : function(){
        let headerContent = [];
        return (
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.header}>
            {this.props.tabs.map((tab,idx) =>{
                return  <TouchableOpacity key={idx} onScroll={() => this.navigators(idx)} onPress={() => this.navigators(idx)} style={styles.tab}>
                            <Text style={[styles.title,this.state.hotKey == headerData[idx].key ? styles.active : null]} key={headerData[idx].key}>{headerData[idx].title}</Text>
                        </TouchableOpacity>
            })}
            </ScrollView>
        );
    },
    navigators : function(idx){
        this.props.goToPage(idx);
    }
});

const styles = StyleSheet.create({
    header : {
        flex : 1,
        flexDirection: 'row',
        flexWrap : 'nowrap',
        height : 30
    },
    title : {
        padding : 8,
        marginRight : 5,
        marginLeft : 5,
        height : 25,
        color : '#999'
    },
    active : {
        color : '#E78170'
    }
});


module.exports = classificationHeader;