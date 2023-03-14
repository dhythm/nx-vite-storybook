import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { FC } from 'react';

export const Checkbox: FC<CheckboxProps> = ({ ...props }) => (
  <MuiCheckbox {...props} />
);
