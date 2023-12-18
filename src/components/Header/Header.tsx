"use client";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

export interface HeaderProps {};

const Header = () => {
    const { data: session } = useSession();

    return (
        <AppBar position="sticky">
            <Toolbar sx={{backgroundColor: 'background.paper'}}>
                <Typography component={"p"}>Sidebet</Typography>
                {session ? (
                    <Button variant="contained" onClick={() => signOut()}>Sign Out</Button>
                ) : <Button variant="contained" onClick={() => signIn()}>Sign In</Button>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
