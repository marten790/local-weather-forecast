import React from 'react';
import PropTypes from 'prop-types';
// import { notify } from 'react-notify-toast';
import DayInfo from '../components/day-info';

const GetDaysWeather = ({ days }) => (
  <React.Fragment>
    {days.error && <p>Error</p>}
    {!days.data && <p>Loading</p>}
    {days.data && !days.error && <DayInfo weatherDataArray={days.data.list} />}
  </React.Fragment>
);

// class GetDaysWeather extends Component {
//   render() {
//     if (this.props.days.error) {
//       notify.show(this.props.days.payload.message, 'error', 7000);
//     }
//
//     if (!this.props.days.data) {
//       return (
//         <div>Loading...</div>
//       );
//     }
//
//     return (
//       <div>
//         <DayWeather weatherDataArray={this.props.days.data.list} />
//       </div>
//     );
//   }
// }

GetDaysWeather.propTypes = {
  days: PropTypes.object,
};
GetDaysWeather.defaultProps = {
  days: {},
};

export default GetDaysWeather;
