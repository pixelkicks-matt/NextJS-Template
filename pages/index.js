import Footer from '../components/Footer';
import Header from '../components/Header';


export default function Home({ posts }) {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Main Content Goes Here</h1>
      </main>

      <Footer></Footer>
    </div>
  )
}