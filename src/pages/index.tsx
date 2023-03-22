import { darkTheme, lightTheme } from '@/theme';
import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useState } from 'react'

const Home = () => {
  const [light, setLight] = useState(false);
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />
      <Head>
        <title>Redit clone</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Typography variant='h1'>
        Helloworld
      </Typography>
      <Button>
        Hello
      </Button>
    </ThemeProvider>
  )
}
export default Home;