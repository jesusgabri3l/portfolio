import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/sections/header';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import RecentWork from '../components/sections/work';
import Footer from '../components/sections/footer';

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Jesús Gabriel | Web developer</title>
          <meta name="description" content="Jesús Gabriel | Web developer | I am a passionate web developer worried about my code readibility. I consider myself as a challenger, competitive and a self-taught person who is always looking for challenges, and new topics to learn. I enjoy to CSS and building UI." />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <meta name="keywords" content="Web developer, Frontend developer, Backend developer, Freelancer, UI/UX, Vue.js, React, Svelte, Node.js, Express"/>
          <meta name="author" content="Jesús Gabriel" />
          <link rel="canonical" href="https://jesusgabri3l.vercel.app"/>
          <link rel="icon" href="/favicon.ico" />
          <link href="//db.onlinewebfonts.com/c/23c0fcab84d99da0de762de7e220a6e1?family=Europa" rel="stylesheet" type="text/css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <Header />
        <main className="bg-green-600 flex items-center flex-col mt-4 py-20 px-32 xl:px-32 px-7 ">
            <About />
            <Skills />
        </main>
        <RecentWork />
        <Footer />
      </div>
    </Layout>
  );
}
