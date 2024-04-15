import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
function Signin() {
    return <div>

        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"

        }}>
            <Typography variant={"h6"} style={{ color: 'white' }}>
                welcome back!
            </Typography>

        </div>

        <div style={{
            display: "flex",
            justifyContent: "center"


        }}>
            <Card varint={"outlined"} style={{
                width: 400,
                padding: 20,
            }}>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <br /><br />
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
                <br /><br />
                <Button size={"large"} variant="contained">Sign In</Button>
            </Card>
        </div>
    </div>



}

export default Signin;
