import './stylesheet/App.scss';
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Header } from './components/Header'
import {  About } from './components/About'
import {  Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import Navbar from './components/Nav';
import poster from './assets/website-screenshots/poster.png'
import sinus from './assets/website-screenshots/sinus.png'
import ewallet from './assets/website-screenshots/e-wallet.png'
import starwars from './assets/website-screenshots/star-wars.png'
import yummy from './assets/website-screenshots/yummy.png'



function App() {
  const projects = [
    {
      id: 1,
      name: "Inga Bra Bygg AB",
      img: poster,
      desc: "Inge Berglund driver en byggfirma som renoverar fasader för privatpersoner och företag. Projekt byggdes av Node.js, Express.js, Mongoose, MVC, Filuppladdning, JWT, Bcrypt, RBAC, Websockets, Fullt fungerande endpoints. ",
      codelink: "https://github.com/Omarhuba/Backend-Slutproject-Grupp",
      sitelink: "",
    },
    {
      id: 2,
      name: "Cold'n Yummy",
      imgURL: "conldn yummy",
      img: yummy,
      desc: "Cold n Yummy™ vill ha en kampanjsida för framröstning av en ny glassmak. Användare väljer en smak och skickar med sitt namn och e-mail-adress för att rösta på den. Man ska även kunna se topplistan på de mest populära smakerna.",
      codelink: "https://github.com/Omarhuba/coldn-yumyy-express-sequelize-",
      sitelink: "",

    },
    {
      id: 3,
      name: "Sinus Web Shop",
      imgURL: "sinus",
      img: sinus,

      desc: "En e-handelsbutik byggd i Vue JS med VueX och routing. Kunder kan skapa ett konto för att spara sin information och det finns även ett admingränssnitt för att skapa, läsa, uppdatera och ta bort produkter och beställningar.",
      codelink: "https://github.com/theodorwill/Slutprojekt-Sinus-Webshop",
      sitelink: "",

    },
    {
      id: 4,
      name: "E-Wallet",
      imgURL: "ewallet",
      img: ewallet,
      desc: "En digital plånbok app som samlar alla kreditkort. Det ska gå och se sina kreditkort samt lägga till nya.",
      codelink: "https://github.com/Omarhuba/E-WALLET-VUE",
      sitelink: "",

    },
    {
      id: 5,
      name: "Star Wars",
      imgURL: "star-wars",
      img: starwars,
      desc: "Vanilla Javascript med Star Wars API, Appen är en webbplats för en katalog över Star Wars karaktärer.",
      codelink: "https://github.com/Omarhuba/Star-Wars-Native-Javascript",
      sitelink: "https://youtu.be/rikf5ZNmD6I",

    },
  ];
  return (
      <div className="App" id='app'>
        <Navbar />
        <Header />
        <About />
        <Projects  items={projects}/>
        <Skills />
        <Contact />
      </div>
  );
}

export default App;
