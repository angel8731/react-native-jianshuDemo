/**
 * 简书APP关注
 */
import React,{
    Component,
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ListView,
    AlertIOS,
    Dimensions,
    TouchableHighlight
    } from 'react-native';

var data = require('../../mock/cityData.json');

var navList = [];
var DetectionPage = React.createClass({
    getInitialState : function(){
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        return {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    },
    componentWillMount : function(){
        var res = this.listViewHandleData(data);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(res.dataBlob,res.sectionIDs,res.rowIDs),
            loaded: true
        });
    },

    listViewHandleData : function(result){
        var me = this,
            dataBlob = {},
            //sectionIDs = ['s0','s1'],
            sectionIDs = [],
            //rowIDs = [[],[]],
            rowIDs = [],
            key,
            //result = Util.sortResource(data),        //重新排序
            length = result.data.abroad.length,
            //length = result.length,
            splitIdx,
            i = 0;

        for(var item in result.data.abroad){
            sectionIDs.push(item)
            rowIDs.push([])
            dataBlob[item] = result.data.abroad[item];
            for(var letter in result.data.abroad[item]){
                dataBlob[item + ':' +result.data.abroad[item][letter]['code']] = result.data.abroad[item][letter]['name'];
                rowIDs[i].push(result.data.abroad[item][letter]['code']);
            }
            navList.push(
              <TouchableOpacity onPress={()=>this.scrollNav(item)} key={item}>
                <Text>{item}</Text>
              </TouchableOpacity>
              );
            i++;
        }

        return {
            dataBlob : dataBlob,
            sectionIDs : sectionIDs,
            rowIDs : rowIDs
        }
    },
    scrollNav : function(item){
      console.log(item);
    },
    _renderRow : function(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this.onPressRow(rowData, sectionID)}>
                <View style={styles.rowStyle}>
                    <Text style={styles.rowText}>{rowData} {rowID}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    onPressRow : function (rowData, sectionID) {
        var buttons = [
            {
                text : '取消'
            },
            {
                text    : '确定'
            }
        ]
        AlertIOS.alert('当前城市 ' + rowData, null, null);
    },

    renderSectionHeader(sectionData, sectionID){
        if(sectionData){
            return (
              <View style={[styles.rowHeader]}>
                  <Text style={styles.rowText}>{sectionID}</Text>
              </View>
            )
        }else{
            return <View />
        }
    },

    render : function(){
        return (
            <View style={styles.container}>
              <View style={styles.listView}>
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, sectionID, rowID, highlightRow)}
                    renderSectionHeader = {this.renderSectionHeader}
                    onScroll={() => { console.log('onScroll!'); }}
                    />
              </View>
              <View style={styles.nav}>
                  {navList}
              </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({

    container : {
        flex : 1,
        marginTop:20,
        position : 'relative'
    },
    listView : {
      height : Dimensions.get('window').height-80
    },
    nav : {
      position : 'absolute',
      width: 37,
      height : Dimensions.get('window').height,
      justifyContent : 'center',
      alignItems : 'center',
      right : 3,
      top : 0
    },
    rowHeader : {
      height : 30,
      marginRight : 40,
      backgroundColor: '#f9f9f9',
      borderColor : '#E0E0E0',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      justifyContent : 'center',
      paddingLeft: 16
    },
    rowStyle: {
        height: 20,
        paddingVertical: 20,
        paddingLeft: 16,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginRight : 40,
        justifyContent : 'center',
    }
});

module.exports = DetectionPage;
