import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getHomeListPost } from '../redux/actions';
import RestaurantCard from './RestaurantCard';

class Home extends React.Component {
    componentDidMount() {
        this.props.getHomeListPost()
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    leftComponent={{ 
                        icon: 'user-circle', 
                        color: 'white',
                        type: 'font-awesome'
                    }}
                    rightComponent={{ 
                        text: `Halo, ${this.props.user.username}`, 
                        style: { color: 'white', fontSize: 18, fontWeight: '700' } 
                    }}
                    containerStyle={{
                        backgroundColor: 'red',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                    rightContainerStyle={{
                        flex: 3
                    }}
                />
                
                <FlatList 
                    data={this.props.homeListPost.listPost}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                            // onPress={}
                        >
                            <View style={{ width: '50%' }}>
                                <RestaurantCard data={item} />
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    keyExtractor={item => item.restaurant.name}
                    style={{ width: '98%' }}
                    numColumns={2}
                    onRefresh={() => this.props.getHomeListPost()}
                    refreshing={this.props.homeListPost.loading}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = ({ homeListPost, user }) => {
    return {
        homeListPost,
        user
    }
}

export default connect(mapStateToProps, { getHomeListPost })(Home);