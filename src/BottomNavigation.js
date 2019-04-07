import * as React from 'react';
import { StyleSheet, Text} from 'react-native';
import { BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyBottomNavigation extends React.Component {
    constructor() {
        super();
        
        this.state = {
            index: 0,
            routes: [
              { key: 'music', title: 'Music', icon: 'queue-music' },
              { key: 'albums', title: 'Albums', icon: 'album' },
              { key: 'recents', title: 'Recents', icon: 'history' },
            ],
          };
      }
      
  

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation  style={styles.bottom}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });