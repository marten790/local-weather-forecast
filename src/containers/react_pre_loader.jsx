// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import React from 'react';
// import Preloadr, { preloadDefaultProp, preloadPropTypes } from 'react-preloadr';
//
// import { productsRequestedAsync } from '../reducers/products/actions';
// import { getDetailedWeather } from '../actions/index';
//
// console.log('entered');
// const Failed = () => <p>Failed to load products</p>;
// const Requested = () => <p>Loading products</p>;
// const ProductsList = ({ payload }) => (
//   <ul>{payload.map(product => <li key={product.id}>{product.name}</li>)}</ul>
// );
//
// class Products extends React.Component {
//   componentDidMount() {
//     console.log('this.props', this.props);
//     this.props.dispatch(getDetailedWeather());
//   }
//   render() {
//     const { payload, status } = this.props;
//     return (
//       <Preloadr failed={() => <Failed />} requested={() => <Requested />} status={status}>
//         {() => <ProductsList payload={payload} />}
//       </Preloadr>
//     );
//   }
// }
//
// Products.propTypes = {
//   payload: PropTypes.arrayOf(PropTypes.shape()),
//   status: preloadDefaultProp,
// };
//
// Products.defaultProps = {
//   payload: [],
//   status: preloadDefaultProp,
// };
//
// const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({ getDetailedWeather: dispatch(productsRequestedAsync()) });
// // console.log('mapDispatchToProps', mapDispatchToProps);
//
// export default connect(mapStateToProps, mapDispatchToProps)(Products);
