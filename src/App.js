import './App.css';
import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';
import TextDiv from './components/TextDiv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <TextDiv 
          text__snippet='Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                          urna consequat felis vehicula class ultricies mollis dictumst, 
                          aenean non a in donec nulla. 
                          Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, 
                          integer placerat et turpis mi eros nec lobortis taciti, 
                          vehicula nisl litora tellus ligula porttitor metus. '
        >
        </TextDiv>
        <ImageSection />
      </header>
    </div>
  );
}

export default App;
