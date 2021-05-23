import Head from 'next/head';
import Layout from '../src/components/layout';
import DashboardComp from '../src/components/dashboard';

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Admin Panel - Dashboard</title>
      </Head>
      <DashboardComp></DashboardComp>
    </Layout>
  );
}
