

import {
  Routes,
  Route,
  
} from "react-router-dom";
import GetChat from "./com/getchat";
import Res from "./com/res";
import Sendit from "./com/send";

import Home from "./home";
function App() {

  return (
<Routes>
  {/* <GetChat */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/go" element={<GetChat />}></Route>
      <Route path="/go/send" element={<Sendit />}></Route>
      <Route path="/go/res" element={<Res />}></Route>
      </Routes>
  );
}

export default App;