import { Metadata } from 'next'
import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import {Header, ThemeRegistry, SessionProvider} from "@/components";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

import '../sass/main.scss';

export const metadata: Metadata = {
    title: 'Sidebet',
    description: 'Sidebet allows you to place a bet on anything. Keep track of bets between friends, groups, leagues and so much more.'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body>
                <SessionProvider session={session}>
                    <ThemeRegistry>
                        <Header />
                        <Box
                            component="main"
                        >
                            {children}
                        </Box>
                    </ThemeRegistry>
                </SessionProvider>
            </body>
        </html>
    );
}
