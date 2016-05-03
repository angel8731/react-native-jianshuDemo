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
    Dimensions
    } from 'react-native';

import Swiper from 'react-native-swiper';
import hotDetail from './hotDetail.js';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var Hot = React.createClass({
    getInitialState : function(){
        console.log(this.props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        return {
            ds : [
                {AwayTeam: "TeamA", HomeTeam: "TeamB", Selection: "AwayTeam"},
                {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
                {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
                {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
                {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
                {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
                {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"}
            ],
            dataSource: ds
        }
    },
    onEndReached : function(){

    },
    render : function(){
        var height = Dimensions.get('window').height;
        return (
            <View style={{height : height-80}}>
                <Swiper style={styles.wrapper} showsButtons={false} height={140}>
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    onEndReached={this.onEndReached}
                    style={{backgroundColor : '#FFF'}}
                />
            </View>
        );
    },
    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.state.ds)
        })

    },
    renderRow : function(rowData: string, sectionID: number, rowID: number){
        return (
            <TouchableHighlight underlayColor = '#D9D9D9' onPress={() => this._pressRow(rowData,sectionID,rowID)}>
                <View style={styles.row}>
                    <View style={styles.panelLeft}>
                        <View style={styles.author}>
                            <Image
                                source={{uri: base64Icon, scale: 3}}
                                style={styles.avast} />
                            <Text style={styles.name}>超人先生</Text>
                            <Text style={styles.time}>2分钟以前</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={{fontSize : 16}}>暗恋，那么美（二）</Text>
                        </View>
                        <View style={styles.others}>
                            <View style={styles.tag}>
                                <Text style={styles.tagTxt}>投资理财</Text>
                            </View>
                            <Text style={styles.otherTxt}>阅读 7432</Text>
                            <Text style={styles.dot}>·</Text>
                            <Text style={styles.otherTxt}>评论 7432</Text>
                            <Text style={styles.dot}>·</Text>
                            <Text style={styles.otherTxt}>喜欢 7432</Text>

                        </View>
                    </View>
                    <View style={styles.panelRight}>
                        <Image
                            source={{uri : 'https://img3.doubanio.com/img/celebrity/medium/17525.jpg'}}
                            style={styles.base} />
                    </View>
                </View>
            </TouchableHighlight>
        );

    },
    _pressRow : function(rowData,sectionID,rowID){
        this.props.nav.push({
            barTintColor : '#000',
            title: "详情页",
            component : hotDetail,
            backButtonTitle: '返回',
            rightButtonTitle: 'Cancel',
            navigationBarHidden : false,
            onRightButtonPress: () => this.props.nav.pop(),
            passProps : {id : rowID}
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