// // import getDetailedWeather from 'api/products';
// // import { getDetailedWeather } from '../../actions/index';
//
//
// export const PRODUCTS_FAILED = 'PRODUCTS_FAILED';
// export const PRODUCTS_REQUESTED = 'PRODUCTS_REQUESTED';
// export const PRODUCTS_SUCCEEDED = 'PRODUCTS_SUCCEEDED';
//
// export const productsFailed = payload => ({
//   payload,
//   type: PRODUCTS_FAILED,
// });
// export const productsRequested = () => ({
//   type: PRODUCTS_REQUESTED,
// });
// export const productsSucceeded = payload => ({
//   payload,
//   type: PRODUCTS_SUCCEEDED,
// });
//
// export const productsRequestedAsync = () => (dispatch) => {
//   dispatch(productsRequested());
//   dispatch(getDetailedWeather())
//     .then(payload => dispatch(productsSucceeded(payload)))
//     .catch(error => dispatch(productsFailed(error)));
// };
