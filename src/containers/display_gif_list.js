import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Notifications, {notify} from 'react-notify-toast';
import { fetchGifList } from '../actions/index';

class DisplayGifList extends Component {

  constructor(props){

		super(props);
		this.state = { gifs: {} };
	}

  renderGifs(gifData){
        return (
          <span key={gifData.images.fixed_height_small.url}>
            <img key={gifData.id} src={ gifData.images.fixed_height_small.url }/>
          </span>
    );
  }

	render(){
    if(!this.props.gifs.data) {
      return (
        <div>Loading...</div>
      )};

		return(
        <div>
          { this.props.gifs.data.map(this.renderGifs) }
        </div>
		);
	}
}

const mapStateToProps = (state) => {
  return {gifs: state.gifs};
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGifList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayGifList);
