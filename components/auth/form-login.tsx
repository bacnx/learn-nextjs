import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Stack, Button, InputAdornment, IconButton, type SxProps } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { InputField } from '@/components/form'
import type { LoginPayload } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(4, 'Username must be at least 4 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export interface FormLoginProps {
  sx?: SxProps
  onSubmit: (payload: LoginPayload) => void
}

export function FormLogin({ sx, onSubmit }: FormLoginProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { handleSubmit, control } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  return (
    <Stack component="form" spacing={2} sx={sx} onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Username" name="username" control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        label="Password"
        name="password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" size="large" variant="contained" disableElevation fullWidth>
        Submit
      </Button>
    </Stack>
  )
}
