import { FETCH_GEO_WEATHER } from '../actions/index';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_GEO_WEATHER:
		return action.payload;

	default:
		return state;
	}
	return state;

}
