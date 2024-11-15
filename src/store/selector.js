import { createSelector } from "reselect";

const selectForm = (state) => state.form;

export const selectFormValues = createSelector([selectForm], (form) => ({
  name: form.name,
  cost: form.cost,
}));
