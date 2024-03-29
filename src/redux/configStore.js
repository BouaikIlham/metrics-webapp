import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidData from './Data/reducers';

const rootReducer = combineReducers({
  covidData,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
