import './App.css'

function App() {
  return (
    <>
      <div>
        <nav className="flex pt-6">
          {/* The main logo */}
          <img className="flex-none pl-[48px]" src="main-logo.png" alt="The main logo"/>
          {/* The search bar */}
          <div className="flex-1 ml-[89px]">
            <div className="flex items-center bg-search-bar h-[54px] w-[652px] rounded-[6px]">
              <img className="pl-3 pr-[10px]" src="search-icon.png" alt="Search Icon"/>
              <input className="text-light-grey text-searchText bg-transparent border-none outline-none" type="text"
                placeholder="Search..."/>
            </div>
          </div>
          {/* The buttons inside the navigation */}
          <div className="flex items-center gap-4 ml-auto mr-[69px]">
            <div className="h-[45px] w-[45px] bg-icon-grey p-[7.5px] rounded-[15px]">
              <img src="moon.png"/>
            </div>
            <div className="h-[45px] w-[45px] bg-icon-grey p-[7.5px] rounded-[15px]">
              <img src="notification.png"/>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
