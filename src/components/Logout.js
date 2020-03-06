import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { onUserLogout } from '../redux/actions';

class Logout extends React.Component {
    componentDidUpdate() {
        if(!this.props.user.username) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Login' }
                ]
            });
            this.props.rootStackNavigation.dispatch(resetAction);
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Button 
                    title="Log Out"
                    containerStyle={{ 
                        marginVertical: 15, 
                        borderWidth: 0.5,
                        borderColor: 'blue',
                        backgroundColor: 'blue',
                        width: '20%'
                    }}
                    titleStyle={{ color: 'white' }}
                    type='outline'
                    onPress={this.props.onUserLogout}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { onUserLogout })(Logout);