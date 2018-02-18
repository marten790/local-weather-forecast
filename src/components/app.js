import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import GetBrowserGeoLocation from '../containers/geo_located';
import SearchBar from '../containers/search_bar';
import InputDays from '../containers/input_days';
import GetDaysWeather from '../containers/detailed_forecast';
import GifSearch from '../containers/gif_search';
import DisplayGifList from '../containers/display_gif_list';


export default class App extends Component {
	render(){
		return(
			<div>
				<Notifications />
				<InputDays />
				<GetDaysWeather />
				<GetBrowserGeoLocation />
				{/* <GifSearch /> */}
				{/* <DisplayGifList /> */}
			</div>
		)
	};
}
