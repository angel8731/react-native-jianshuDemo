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
        key : 'index',
        title : '推荐',
        icon : '',
        href : ''
    },
    {
        key : 'news',
        title : '热点新闻',
        icon : '',
        href : ''
    },
    {
        key : 'joke',
        title : '搞笑',
        icon : '',
        href : ''
    },
    {
        key : 'video',
        title : '视频',
        icon : '',
        href : ''
    },
    {
        key : 'entertainment',
        title : '娱乐',
        icon : '',
        href : ''
    },
    {
        key : 'fashion',
        title : '时尚',
        icon : '',
        href : ''
    },
    {
        key : 'tech',
        title : '科技',
        icon : '',
        href : ''
    },
    {
        key : 'sports',
        title : '体育',
        icon : '',
        href : ''
    }
]
var ClassificationHeader = React.createClass({
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

module.exports = {
    ClassificationHeader : ClassificationHeader,
    headerData : headerData
};