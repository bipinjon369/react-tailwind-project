import './App.css'

function App() {
  return (
    <>
      <div>
        <nav className="flex flex-col sm:flex-row items-start sm:items-center pt-4 sm:pt-6 px-4 sm:px-12 gap-4 sm:gap-0">
          {/* The main logo */}
          <img className="flex-none h-8 sm:h-auto" src="main-logo.png" alt="The main logo"/>
          
          {/* The search bar */}
          <div className="flex-1 w-full sm:w-auto sm:ml-[89px] order-3 sm:order-2">
            <div className="flex items-center bg-search-bar h-[45px] sm:h-[54px] w-full sm:w-[652px] sm:max-w-[652px] rounded-[6px]">
              <img className="pl-3 pr-[10px] w-4 h-4 sm:w-auto sm:h-auto" src="search-icon.png" alt="Search Icon"/>
              <input 
                className="text-light-grey text-sm sm:text-searchText bg-transparent border-none outline-none flex-1 pr-3" 
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          
          {/* The buttons inside the navigation */}
          <div className="flex items-center gap-3 sm:gap-4 sm:ml-4 order-2 sm:order-3 sm:static absolute right-2 top-2">
            <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]">
              <img src="moon.png" className="w-full h-full object-contain"/>
            </div>
            <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]">
              <img src="notification.png" className="w-full h-full object-contain"/>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default App
