import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
        });
    };

    return (
        <>
            <CssBaseline />
            <Container fixed>
                <div>
                    <Typography variant="h5">
                        Forgot Password
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Reset Password
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Link to='/Login' variant='body2'>Back to log in page</Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}


export default ForgotPassword
