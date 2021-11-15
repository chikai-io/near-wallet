import { createSelector } from "reselect";

import createParameterSelector from "../createParameterSelector";

const SLICE_NAME = 'staking';

const getAccountIdParam = createParameterSelector((params) => params.accountId);

// Top level selectors
export const selectStakingSlice = (state) => state[SLICE_NAME];

export const selectStakingAccounts = createSelector([selectStakingSlice], (staking) => staking.accounts || []);

export const selectStakingCurrentAccountbyAccountId = createSelector(
    [selectStakingAccounts, getAccountIdParam], 
    (accounts, accountId) => accounts.find((account) => account.accountId === accountId)
);
