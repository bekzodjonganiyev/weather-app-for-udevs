import { useSelector } from "react-redux";

import { SearchInput } from "./components/searchInput/SearchInput";

function App() {
  const { weatherData, weatherErrorData, loadingStatus } = useSelector((state) => state.weatherDataReducer);

  let content;
  
  if (loadingStatus === "loading") {
    content = <h1>Loading ...</h1>;
  }

  if (weatherData.length !== 0){ 
    content = <p>{weatherData.name}</p>
  }

  if (weatherData.length === 0 && weatherErrorData.length !== 0) {
    content = <p>{weatherErrorData?.data?.message ? weatherErrorData.data.message : weatherErrorData}</p>
  }

  return (
    <>
    {content}
    <SearchInput/>
    </>    
    );
}

export default App;
