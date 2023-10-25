import * as yup from 'yup';

export const itAdministratorValidationSchema = yup.object().shape({
  skills: yup.string().required(),
  experience: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
