import { useController, Control } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

export type InputFieldProps = TextFieldProps & {
  name: string
  control: Control<any>
}

export function InputField({
  name,
  control,
  value: _value,
  onChange: _onChange,
  onBlur: _onBlur,
  ref: _ref,
  ...restProps
}: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <TextField
      fullWidth
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...restProps}
    />
  )
}
