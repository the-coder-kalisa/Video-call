import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
function App() {
  return (
    <div className="bg-[green] flex flex-col items-center pt-4 h-[100vh] w-full">
      <h1 className="font-bold text-2xl w-[300px] text-center py-3 rounded-[10px] border-2 border-solid border-black bg-white ">Video Chart</h1>
      <div className="w-[40rem]">

      <VideoPlayer />
      <Options>
        <Notifications></Notifications>
      </Options>
      </div>
    </div>
  );
}

export default App;