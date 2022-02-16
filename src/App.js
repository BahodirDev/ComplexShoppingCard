
import './App.css';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Main from './Layouts/Main';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CardProvider } from './reducer/ContextProvider';



function App() {
  return (
   <>
   <ToastContainer />
      <CardProvider>
      <Header />
      <Main />
      </CardProvider>
      <Footer />
   </>
  );
}

export default App;
