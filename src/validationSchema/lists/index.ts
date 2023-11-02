import * as yup from 'yup';

export const listValidationSchema = yup.object().shape({
  team_id: yup.string().nullable().required(),
  owner_id: yup.string().nullable().required(),
});
