import * as DataActionCreators from "./data/actions";
import * as DataThunksCreators from "./data/thunks";
import * as AppThunksCreators from "./app/thunks";

export const ActionCreators = {
    ...DataActionCreators,
    ...DataThunksCreators,
    ...AppThunksCreators,
  };
