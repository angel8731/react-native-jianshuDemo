/**
 * 内容列表 navbar
 * Created by wanglong on 16/4/25.
 */
import React,{
    View,
    ScrollView,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image,
    Dimensions,
    Platform,
    AsyncStorage,
    ActivityIndicatorIOS, //转圈加载
    RefreshControl
    } from 'react-native';

import Swiper from 'react-native-swiper';
import Detail from './Detail.js';
//加载多种li样式
import Li from './lis.js';

var PRE_LIST_URL = "http://m.yergoo.com/api/news/app/lists/";
var LISTS_KEY = "toutiao-kailuo99-";

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 != r2,
    sectionHeaderHasChanged : (s1, s2) => s1 !== s2
});

var Hot = React.createClass({
    getInitialState : function(){
        return {
            dataSource: null,
            isFetchMaxId:0,
            isRefreshing : false
        }
    },
    onEndReached : function(){
        if(this.state.isFetchMaxId != this.state.dataSource.max) {
            this.setState({
                isFetchMaxId:this.state.dataSource.max,
            });
            this.getData('bottom', 20);
        }
    },
    getData : async function(pos, count) {
        if(!this.state.dataSource) {
            var begin_id = 0;
        } else {
            var begin_id = this.state.dataSource.max;
        }
        if(!count) {
            count = 6;
        }

        var url = PRE_LIST_URL + this.props.tabLabel + '/'+count+'?beginid=' + begin_id;
        console.log(url);
        // fetch(url)
        //     .then((response) => response.json())
        //     .then(
        //     (responseData) => {
        //         console.log(responseData);
        //         if(responseData.status == 1) {
        //             if(this.state.dataSource == null) {
        //                 var tmp = {
        //                     lists:[responseData.data.lists.lists],
        //                     max: responseData.data.lists.max
        //                 };
        //
        //             } else {
        //                 var tmp = this.state.dataSource;
        //                 console.log()
        //                 if(pos == 'top') {
        //                     tmp.lists.unshift(responseData.data.lists.lists);
        //                 } else {
        //                     tmp.lists.push(responseData.data.lists.lists);
        //                 }
        //                 tmp.max = responseData.data.lists.max;
        //
        //             }
        //             this.setState({
        //                 dataSource: tmp,
        //                 loaded: true
        //             });
        //
        //             AsyncStorage.setItem(LISTS_KEY + this.props.tabLabel, JSON.stringify(tmp)).done();
        //         } else {
        //             // Alert.alert('暂无最新，请稍等片刻！');
        //         }
        //     }
        // )
        //     .done();
    },
    _loadinitData : async function(){
        await this.getData('init',30);
    },
    renderFooter : function() {
        if(Platform.OS === 'ios') {
            return (
                <View style={{height:260,flex : 1,alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicatorIOS color = {'#d43d3d'} />
                </View>
            );
        } else {
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
                    <ProgressBar color = {'#d47b83'} styleAttr="Small" />
                </View>
            );
        }
    },
    _reloadLists : function() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.getData('top', 6);
            this.setState({isRefreshing: false});
        }, 1000);
    },
    render : function(){
        var height = Dimensions.get('window').height;
        if(!this.state.loaded) {
            if(Platform.OS === 'ios') {
                return (
                    <View style={{flex:1}}>
                        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                            <ActivityIndicatorIOS color = {'#d43d3d'} />
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={{flex:1}}>
                        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                            <ProgressBar color = {'#d47b83'} />
                        </View>
                    </View>
                );
            }
        }else{
            return (
                <View style={{height : height-80}}>
                    <ListView
                        initialListSize={20}
                        dataSource={ds.cloneWithRowsAndSections(this.state.dataSource.lists)}
                        renderRow={this.renderRow}  //渲染每一条数据
                        onEndReached={this.onEndReached}
                        style={{backgroundColor : '#FFF'}}
                        renderFooter={this.renderFooter}
                        minPulldownDistance={30}   // 最新下拉长度
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._reloadLists}
                                tintColor=  "#CCC"
                                title="正在拉取数据..."
                            />
                        }
                    />
                </View>
            );
        }
    },
    /*
    * <Swiper style={styles.wrapper} showsButtons={false} height={140}>
     <View style={styles.slide1}>
     <Text style={styles.text}>Hello Swiper</Text>
     </View>
     <View style={styles.slide2}>
     <Text style={styles.text}>Beautiful</Text>
     </View>
     <View style={styles.slide3}>
     <Text style={styles.text}>And simple</Text>
     </View>
     </Swiper>
    * */
    componentDidMount(){
        if(!this.state.dataSource){
            this._loadinitData();
        }
    },
    renderRow : function(rowData: string, sectionID: number, rowID: number){
        return (
            <TouchableHighlight underlayColor={'#D9D9D9'} onPress={() => this._pressRow(rowData,sectionID,rowID)}>
                <Li data={rowData.resource} />
            </TouchableHighlight>
        );
    },
    _pressRow : function(rowData,sectionID,rowID){
        this.props.nav.push({
            barTintColor : '#000',
            title: rowData.resource.title,
            component : Detail,
            backButtonTitle: '返回',
            rightButtonTitle: '更多',
            navigationBarHidden : false,
            onRightButtonPress: () => this.props.nav.pop(),
            passProps : {data : rowData}
        })
    }
});

const styles = StyleSheet.create({
    row : {
        flex : 1,
        flexDirection : 'row',
        marginLeft : 20,
        paddingTop : 20,
        paddingBottom : 20,
        justifyContent : 'space-around',
        borderBottomWidth:1,
        borderBottomColor:"#f1f1f1"
    },
    hots : {
        flex : 1
    },
    panelLeft : {
        flex : 1
    },
    author : {
        height : 20,
        flexDirection : 'row',
        flexWrap : 'nowrap',
        justifyContent : 'flex-start'
    },
    avast : {
        height : 20,
        width : 20,
        marginRight : 3,
        borderRadius:10,
        borderWidth : 1,
        borderColor : "#d9d9d9"
    },
    name : {
        padding : 4,
        color : '#409DDC',
        fontSize : 12
    },
    time : {
        padding : 4,
        color : '#999',
        fontSize : 12
    },
    title : {
        height :40,
        padding : 10,
        paddingLeft : 0
    },
    others : {
        height : 20,
        flexDirection : 'row',
        flexWrap : 'nowrap',
        justifyContent : 'flex-start'
    },
    tag : {
        padding : 3,
        borderRadius:20,
        borderColor : '#E78170',
        borderWidth : 1,
        marginRight : 3
    },
    tagTxt : {
        color : '#E78170',
        fontSize : 12
    },
    panelRight : {
        marginRight : 20
    },
    base: {
        width : 80,
        height : 80,
        borderColor:'#d9d9d9',
        borderWidth:1
    },
    otherTxt : {
        padding : 4,
        fontSize : 12,
        color : '#999'
    },
    dot : {
        color : '#D9D9D9',
        fontSize : 12,
        paddingTop : 4,
        paddingBottom : 4
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }

});


module.exports = Hot;
