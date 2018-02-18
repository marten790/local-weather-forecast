import { FETCH_DAYS_WEATHER } from '../actions/index';



export default function(state = {}, action){
	if(action.error){
		return action;
	}
	switch(action.type){
		case FETCH_DAYS_WEATHER:
		return action.payload;

	default:
		return state;
	}
	return state;

}
