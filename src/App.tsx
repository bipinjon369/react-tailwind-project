import './App.css'
const menuList = [
  'Dashboard',
  'Finance',
  'Employee',
  'Company',
  'Candidate',
  'Calendar',
]
function App() {
  return (
    <>
      <div>
        <nav className="flex flex-col sm:flex-row items-start sm:items-center pt-4 sm:pt-6 px-4 sm:px-12 gap-4 sm:gap-0 border-b border-gray-e8">
          {/* The main logo */}
          <img className="flex-none h-8 sm:h-auto mb-2 sm:mb-6" src="main-logo.png" alt="The main logo"/>
          
          {/* The search bar */}
          <div className="flex-1 w-full sm:w-auto sm:ml-[89px] order-3 sm:order-2 mb-2 sm:mb-6">
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
          <div className="flex items-center gap-3 sm:gap-4 sm:ml-4 order-2 sm:order-3 sm:static absolute right-2 top-2 max-270:static mb-2 sm:mb-6">
            <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]">
              <img src="moon.png" className="w-full h-full object-contain"/>
            </div>
            <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]">
              <img src="notification.png" className="w-full h-full object-contain"/>
            </div>
          </div>
        </nav>
        {/* The main content */}
        <main className="grid grid-cols-[272px_1fr] h-screen">
          {/* The sidebar */}
          <aside className="border-r border-t border-gray-e8">
            {/* The user profile details */}
            <div>
              <div className="flex items-center mx-7 pt-6 pb-9">
                <img className="rounded-full h-[52px] w-[52px] mr-3" src="person.png"/>
                <div className="flex flex-col justify-center pr-10">
                  <p className="text-user-name">Gavano</p>
                  <p className="text-user-role text-light-grey">HR Manager</p>
                </div>
                <img className="w-[30px] h-[30px]" src="three-dots.png"/>
              </div>
            </div>
            {/* The list of menu items */}
            <ol className="flex flex-col gap-4 pb-6 border-b-[1.8px] border-b-[#E8E8E8] border-dashed mb-[26px]">
              {
                menuList.map((menu, index) => (
                  <li className={`flex items-center gap-[20px] pl-10 pr-[75px] py-4 ${menu === 'Dashboard' ? 'bg-search-bar' : ''}`} key={index}>
                    <img className="w-[28px] h-[28px]" src={`${menu.toLowerCase()}.png`}/>
                    <p className={`text-menu-item ${menu === 'Dashboard' ? 'text-selected-menu-text' : 'text-menu-text'}`}>{menu}</p>
                  </li>
                ))
              }
            </ol>
            {/* Profile and settings */}
            <ol>
                <li className="flex items-center gap-[20px] pl-10 pr-[75px] py-4">
                    <img className="w-[28px] h-[28px]" src={`profile.png`}/>
                    <p className="text-menu-item text-menu-text">Profile</p>
                </li>
                <li className="flex items-center gap-[20px] pl-10 pr-[75px] py-4">
                    <img className="w-[28px] h-[28px]" src="setting.png"/>
                    <p className="text-menu-item text-menu-text">Setting</p>
                </li>
            </ol>
          </aside>

        </main>
      </div>
    </>
  )
}
export default App
