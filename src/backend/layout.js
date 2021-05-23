import Head from 'next/head';
import Header from '../../src/backend/components/header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Admin Panel - DSS ADMIN PANEL</title>
      </Head>
      <Header></Header>
      {children}
    </>
  );
}
