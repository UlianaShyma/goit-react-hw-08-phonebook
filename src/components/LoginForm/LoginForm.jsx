import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Avatar,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { emailRegExp } from 'utils/RegExp';
import { StyledLink } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        let regEmail = new RegExp(emailRegExp).test(value);
        setEmailError(regEmail ? null : 'Invalid email format');
        break;

      case 'password':
        setPassword(value);
        if (value.length > 0 && value.length < 7) {
          setPasswordError('Password must be at least 7 characters');
        } else {
          setPasswordError(null);
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      logIn({
        email: email.trim(),
        password: password.trim(),
      })
    );
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="div" maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
        }}
      >
        <Avatar
          src="/broken-image.jpg"
          sx={{ bgcolor: 'grey', marginBottom: '10px' }}
        />
        <Typography component="h1" variant="h5">
          Log in
        </Typography>

        <TextField
          sx={{ m: 1, maxWidth: '100%', width: '35ch', marginBottom: '20px' }}
          error={Boolean(emailError)}
          helperText={emailError}
          margin="normal"
          id="standard-multiline-flexible"
          label="Email"
          required
          maxRows={4}
          variant="standard"
          name="email"
          autoComplete="email"
          type="email"
          autoFocus
          fullWidth
          value={email}
          onChange={handleChange}
        />

        <FormControl
          sx={{ m: 1, maxWidth: '100%', width: '35ch', marginBottom: '20px' }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password *
          </InputLabel>
          <Input
            error={Boolean(passwordError)}
            name="password"
            value={password}
            onChange={handleChange}
            required
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            inputProps={{
              'aria-describedby': 'password-helper-text',
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Typography
            id="password-helper-text"
            variant="caption"
            color={passwordError ? 'error' : 'text'}
          >
            {passwordError}
          </Typography>
        </FormControl>
        <Button
          sx={{
            m: 1,
            maxWidth: '100%',
            width: '40ch',
            marginBottom: '20px',
          }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={Boolean(emailError ?? passwordError)}
        >
          LOG IN
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <StyledLink to="/register">
              Don't have an account yet? Sign up
            </StyledLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
