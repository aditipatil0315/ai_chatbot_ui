import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="h-[100vh] w-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-[80vw] max-w-xl bg-white shadow-lg rounded-lg ">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
