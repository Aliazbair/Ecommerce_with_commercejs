import React from 'react'
import Head from 'next/head'

import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { theme, useStyles } from '../utils/styels'
import NextLink from 'next/link'

const Layout = ({ children, commercePublicKey, title = 'Coolshop' }) => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>{`${title}- Coolshop`}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,shrink-to-fit=no'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position='static'
          color='default'
          elevation={0}
          className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
          <NextLink href="/">
              <Link
                variant="h6"
                color="inherit"
                noWrap
                href="/"
                className={classes.toolbarTitle}
              >
                CoolShop
              </Link>
            </NextLink>
            <nav>
              <NextLink href='/cart'>
                <Link
                  variant='button'
                  color='textPrimary'
                  href='/cart'
                  className={classes.link}>
                  Cart
                </Link>
              </NextLink>
            </nav>
          </Toolbar>
        </AppBar>
        <Container component='main' className={classes.main}>
          {children}
        </Container>
        <Container maxWidth="md" component="footer">
          <Box mt={5}>
            <Typography variant='body2' color='textSecondary' align='center'>
              {'@'}
              Coolshop 2021
              {'.'}
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
