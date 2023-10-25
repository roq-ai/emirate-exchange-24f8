import * as yup from 'yup';

export const businessValidationSchema = yup.object().shape({
  name: yup.number().required(),
  industry: yup.string().required(),
  location: yup.string().required(),
});
