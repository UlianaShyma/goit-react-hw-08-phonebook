import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { StyledLink } from 'components/LoginForm/LoginForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { emailRegExp } from 'utils/RegExp';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      register({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      })
    );
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container component="div" maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
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
          Sign up
        </Typography>

        <TextField
          sx={{ m: 1, maxWidth: '100%', width: '35ch', marginBottom: '10px' }}
          variant="standard"
          margin="normal"
          id="standard-multiline-flexible"
          label="Name "
          multiline
          required
          maxRows={4}
          autoComplete="name"
          autoFocus
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />

        <TextField
          sx={{ m: 1, maxWidth: '100%', width: '35ch', marginBottom: '10px' }}
          variant="standard"
          error={Boolean(emailError)}
          helperText={emailError}
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          type="email"
          value={email}
          id="standard-multiline-flexible"
          maxRows={4}
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
          sx={{ m: 1, marginBottom: '25px', maxWidth: '100%', width: '40ch' }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={Boolean(emailError ?? passwordError)}
        >
          SIGN UP
        </Button>

        <Grid container justifyContent="center">
          <Grid item>
            <StyledLink to="/login">Already have an account? Log in</StyledLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
