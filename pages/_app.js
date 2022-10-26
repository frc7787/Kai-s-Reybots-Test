import '../styles/globals.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reybots</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
