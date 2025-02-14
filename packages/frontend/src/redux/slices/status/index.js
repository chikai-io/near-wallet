import { createSelector } from "reselect";

const SLICE_NAME = 'status';

// Top level selectors
export const selectStatusSlice = (state) => state[SLICE_NAME];

export const selectStatusMainLoader = createSelector(selectStatusSlice, (status) => status.mainLoader || false);

export const selectStatusLocalAlert = createSelector(selectStatusSlice, (status) => status.localAlert || {});

export const selectStatusActionStatus = createSelector(selectStatusSlice, (status) => status.actionStatus || []);
