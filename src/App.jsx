import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap justify-center gap-5 py-5 px-10">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;


// section {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center; 
//   gap: 20px;
//   padding: 20px 40px;
// }
