import Swimlane from './components/Swimlane'
import TakeInput from './components/TakeInput'
import './App.css'
import docIcon from './assets/docIcon.svg'
function App() {
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = docIcon;
  return (
    <>
    <TakeInput/>
     <Swimlane/>
    </>
  )
}

export default App
