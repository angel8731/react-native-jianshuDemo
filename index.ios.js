/**
 * 高仿简书app应用
 * http://www.jianshu.com/
 */
import React, {
    AppRegistry,
    Component,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Navigator,
    TabBarIOS,
    Image
    } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import AttentionIndex from './Modules/Attention/Navigator.js';
import DetectionPage from './Modules/Detection/index.js';
import PublishPage from './Modules/Publish/Navigator.js';
import MessagePage from './Modules/Message/index.js';
import MyselfPage from './Modules/Myself/index.js';

var JianshuApp  = React.createClass({
  getInitialState : function(){
      return {
          selectedTab : 'AttentionIndex'
      }
  },
  render : function(){
    return (
        <View style={{flex : 1}}>
            <TabNavigator>
                <TabNavigator.Item
                    key={'AttentionIndex'}
                    selected={this.state.selectedTab === 'AttentionIndex'}
                    title="发现"
                    renderIcon={() => <Image source={require('image!icon_tabbar_home')} />}
                    renderSelectedIcon={() => <Image source={require('image!icon_tabbar_home_active')} />}
                    titleStyle={{
                        color : '#999',
                        fontSize : 12
                    }}
                    selectedTitleStyle={{
                        color : '#E78170',
                        fontSize : 12
                    }}
                    onPress={() => this.setState({ selectedTab: 'AttentionIndex' })}>
                    <AttentionIndex />
                </TabNavigator.Item>
                <TabNavigator.Item
                    key={'DetectionPage'}
                    selected={this.state.selectedTab === 'DetectionPage'}
                    title="关注"
                    renderIcon={() => <Image source={require('image!icon_tabbar_subscription')} />}
                    renderSelectedIcon={() => <Image source={require('image!icon_tabbar_subscription_active')} />}
                    titleStyle={{
                        color : '#999',
                        fontSize : 12
                    }}
                    selectedTitleStyle={{
                        color : '#E78170',
                        fontSize : 12
                    }}
                    onPress={() => this.setState({ selectedTab: 'DetectionPage' })}>
                    <DetectionPage />
                </TabNavigator.Item>
                <TabNavigator.Item
                    key={'PublishPage'}
                    selected={this.state.selectedTab === 'PublishPage'}
                    renderIcon={() => <Image style={{marginBottom:-8}} source={require('image!button_write')} />}
                    renderSelectedIcon={() => <Image style={{marginBottom:-8}} source={require('image!button_write')} />}
                    onPress={() => this.setState({ selectedTab: 'PublishPage' })}>
                    <PublishPage />
                </TabNavigator.Item>
                <TabNavigator.Item
                    key={'Message'}
                    selected={this.state.selectedTab === 'Message'}
                    title="消息"
                    renderIcon={() => <Image source={require('image!icon_tabbar_notification')} />}
                    renderSelectedIcon={() => <Image source={require('image!icon_tabbar_notification_active')} />}
                    titleStyle={{
                        color : '#999',
                        fontSize : 12
                    }}
                    selectedTitleStyle={{
                        color : '#E78170',
                        fontSize : 12
                    }}
                    onPress={() => this.setState({ selectedTab: 'Message' })}>
                    <MessagePage />
                </TabNavigator.Item>
                <TabNavigator.Item
                    key={'Myself'}
                    selected={this.state.selectedTab === 'Myself'}
                    title="我的"
                    renderIcon={() => <Image source={require('image!icon_tabbar_me')} />}
                    renderSelectedIcon={() => <Image source={require('image!icon_tabbar_me_active')} />}
                    titleStyle={{
                        color : '#999',
                        fontSize : 12
                    }}
                    selectedTitleStyle={{
                        color : '#E78170',
                        fontSize : 12
                    }}
                    onPress={() => this.setState({ selectedTab: 'Myself' })}>
                    <MyselfPage />
                </TabNavigator.Item>
            </TabNavigator>
        </View>
    );
  }
});

AppRegistry.registerComponent('jianshu', () => JianshuApp);