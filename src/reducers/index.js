import { combineReducers } from "redux";

import componentsReducer from "./componentsReducer";
import watchManReducer from "./watchManReducer";
import dependencyTreeReducer from "./dependencyTreeReducer";
import queryReducer from "./queryReducer";
import queryOptionsReducer from "./queryOptionsReducer";
import configReducer from "./configReducer";
import appbaseRefReducer from "./appbaseRefReducer";
import hitsReducer from "./hitsReducer";
import aggsReducer from "./aggsReducer";
import logsReducer from "./logsReducer";
import valueReducer from "./valueReducer";
import loadingReducer from "./loadingReducer";
import streamingReducer from "./streamingReducer";

export default combineReducers({
	components: componentsReducer,
	watchMan: watchManReducer, // contains the list of subscribers
	queryList: queryReducer,
	queryOptions: queryOptionsReducer,
	dependencyTree: dependencyTreeReducer,
	appbaseRef: appbaseRefReducer,
	config: configReducer,
	hits: hitsReducer,
	aggregations: aggsReducer,
	queryLog: logsReducer,
	selectedValues: valueReducer,
	isLoading: loadingReducer,
	stream: streamingReducer
});
