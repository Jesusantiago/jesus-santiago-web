import {NextIntlClientProvider} from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Box } from "@mui/material";
import "../globals.css";
import Head from '../head';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ClientComponent from '../ClientComponent';



export default async function RootLayout({ children, params : {locale} }) {
  console.log(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <Head/>
        <Box 
          component="body"
          sx={{
            maxWidth:'100vw'
          }}
        >
          <NextIntlClientProvider messages={messages}>
            <AppRouterCacheProvider>
              <ClientComponent>
                {children}
              </ClientComponent>
            </AppRouterCacheProvider>
          </NextIntlClientProvider>
        </Box>
    </html>
  );
}
