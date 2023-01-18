import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {

  const [contributors, setContributors] = useState('');

  const onNewContributor = (contributor) => {
    console.log(contributor);
    contributors.pus(contributor);
  }

  return (
    <div>
        <Banner/>
        <Form onContributor={contributor => onNewContributor(contributor)}/>
    </div>
  );
}

export default App;
