import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().required(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
});
