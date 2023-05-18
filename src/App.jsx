import ComponentWithoutTailwind from './ComponentWithoutTailwaind';
import ComponentWithTailwind from './ComponentWithTailwind';
import FocusHoverAndOtherstate from './FocusHoverAndOtherState';
import DarkMode from './DarkMode';
function App() {

  return (
    <>
    <div className="flex mt-5">
      {/* <ComponentWithoutTailwind/>
      <ComponentWithTailwind/> */}
      </div>
      <div>
      {/* <FocusHoverAndOtherstate/> */}
      </div>
      <div>
        <DarkMode/>
      </div>
    </>
  )
}

export default App
