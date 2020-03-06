import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
    FILL_LIST_POST,
    INIT_RESTAURANT_DETAILS
} from './types';

export const getHomeListPost = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
                                        headers:{
                                            "user-key":"74b25737566cc5cfe2644bcdf3265f8e"
                                        }
                                    })
    
            dispatch({
                type: FILL_LIST_POST,
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}

