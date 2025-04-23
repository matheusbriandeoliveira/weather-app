import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="min-h-screen box-border grid place-items-center bg-[linear-gradient(45deg,_#3c5fb7,_#7e42ff)] md:bg-background md:p-8">
      <Weather />
    </div>
  );
};

export default App;
