import logo from './logo.svg';
import './App.css';
import { t ,gettext} from 'ttag';

import { SvgDogWalking } from './SvgDogWalking';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>Choose language </p>
        <div className='buttonLanguage'>
          <a href="/" onClick={()=>{ localStorage.setItem('LOCALE_COOKIE', 'en')} }>English</a>
          <a href="/" onClick={()=>{ localStorage.setItem('LOCALE_COOKIE', 'uk')} }>Ukraina</a>
          <a href="/"  onClick={() => { localStorage.setItem('LOCALE_COOKIE', 'vi') }}>Vietnamese</a>
          <a href="/" onClick={() => { localStorage.setItem('LOCALE_COOKIE', 'ru') }}>Russian</a>
   
        </div>
        <SvgDogWalking/>
      
        <p>
          {t`Detail image`}
        </p>
                <p>
          {t`A dog is walking`}
        </p>
                <p>
          {t`It is such a beautiful day`}
        </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           { t`Learn React` }
        </a>
      </header>
    </div>
  );
}

export default App;
