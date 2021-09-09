import img from './bg1.jpg'
import './App.css';
import './index.css'
import Header from './components/header/index.js'
import Footer from './components/footer/index.js'
import Layout from './components/layout/index.js'
function App() {
  return (
    <div className="App">
      <Header title='the first' descr='smtng i should say' />
      <Layout title='heading 1' descr='some description' urlBg={img} />
      <Layout title='heading 2' descr='some description' colorBg="#e2e2e2" />
      <Layout title='heading 3' descr='some description' urlBg={img} />
      <Footer />
    </div>
  );
}

export default App;
