import { useState } from 'react'
import { useEffect } from 'react'
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const userData = [
  { name: 'Male', value: 35, color: '#5832E6' },
  { name: 'Female', value: 65, color: '#16C098' }
];
const menuList = [
  'Dashboard',
  'Finance',
  'Employee',
  'Company',
  'Candidate',
  'Calendar',
]

const statisticsList = [
  {
    title: "Total Employees",
    arrow: "up",
    percentage: "10.0%",
    number: "856",
    user_type: "Employee"
  },
  {
    title: "Job View",
    arrow: "up",
    percentage: "22.0%",
    number: "3,342",
    user_type: "Viewers"
  },
  {
    title: "Job Applied",
    arrow: "up",
    percentage: "12.0%",
    number: "77",
    user_type: "Applicants"
  },
  {
    title: "Resigned Employees",
    arrow: "down",
    percentage: "7.0%",
    number: "17",
    user_type: "Employee"
  }
]


const data = [
  { name: 'Jan', value1: 25, value2: 28, total: 53 },
  { name: 'Feb', value1: 22, value2: 42, total: 64 },
  { name: 'Mar', value1: 18, value2: 54, total: 72 },
  { name: 'Apr', value1: 30, value2: 28, total: 58 },
  { name: 'May', value1: 35, value2: 10, total: 45 },
  { name: 'Jun', value1: 20, value2: 38, total: 58 },
  { name: 'Jul', value1: 15, value2: 65, total: 80, highlighted: true },
  { name: 'Aug', value1: 25, value2: 50, total: 75 },
  { name: 'Sep', value1: 28, value2: 40, total: 68 },
  { name: 'Oct', value1: 32, value2: 28, total: 60 },
  { name: 'Nov', value1: 38, value2: 14, total: 52 },
  { name: 'Dec', value1: 22, value2: 53, total: 75 }
];

const tableHeaders = [
  "Employee Name",
  "Department",
  "Age",
  "Discipline",
  "Status"
]

const tableData = [
  [
    "Justin Lipshutz",
    "Marketing",
    "22",
    "100%",
    "Permanent"
  ],
  [
    "Marcus Culhane",
    "Finance",
    "25",
    "100%",
    "Contract"
  ],
  [
    "Leo Stanton",
    "HR",
    "28",
    "100%",
    "Permanent"
  ]
]
// interface TooltipProps {
//   active?: boolean;
//   payload?: Array<{
//     value: number;
//     payload: {
//       highlighted?: boolean;
//       [key: string]: any;
//     };
//     [key: string]: any;
//   }>;
//   label?: string;
// }

// const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const total = payload.reduce((sum, entry) => sum + entry.value, 0);
//     const isHighlighted = payload[0]?.payload?.highlighted;
    
//     return (
//       <div className="bg-gray-800 text-white px-3 py-2 rounded shadow-lg border">
//         <p className="font-semibold">{label}</p>
//         {isHighlighted && (
//           <p className="text-blue-300 text-sm">Fill (55) × 110</p>
//         )}
//         <p className="text-lg font-bold">{total}</p>
//       </div>
//     );
//   }
//   return null;
// };

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
  setIsDarkMode((prevMode) => !prevMode);
  };
  // Apply dark class to document root when dark mode is enabled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const setImage = (image: string) => {
    if (isDarkMode) {
      return image.replace('.png', '-dark.png');
    }
    return image;
  }
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <nav className={`dark:bg-dark-mode flex flex-col sm:flex-row items-start sm:items-center pt-4 sm:pt-6 px-4 sm:px-12 gap-4 sm:gap-0 border-b border-border-grey dark:border-icon-grey-dark flex-shrink-0`}>
        {/* The main logo */}
        <img className="flex-none h-8 sm:h-auto mb-2 sm:mb-6" src={setImage('main-logo.png')} alt="The main logo"/>
        
        {/* The search bar */}
        <div className="flex-1 w-full sm:w-auto sm:ml-[89px] order-3 sm:order-2 mb-2 sm:mb-6 sm:min-w-0">
          <div className={`flex items-center bg-search-bar dark:bg-search-bar-dark h-[45px] sm:h-[54px] w-full sm:max-w-[652px] rounded-[6px]`}>
            <img className="pl-3 pr-[10px] w-4 h-4 sm:w-auto sm:h-auto flex-shrink-0" src="search-icon.png" alt="Search Icon"/>
            <input 
              className="text-light-grey text-sm sm:text-searchText bg-transparent border-none outline-none flex-1 pr-3 min-w-0" 
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        
        {/* The buttons inside the navigation */}
        <div className="flex items-center gap-3 sm:gap-4 sm:ml-4 order-2 sm:order-3 sm:static absolute right-2 top-2 max-318:static mb-2 sm:mb-6 flex-shrink-0">
          {/* Hamburger menu button - only visible on small screens */}
          <button 
            className={`md:hidden h-[40px] w-[40px] bg-icon-grey dark:bg-icon-grey-dark p-[6px] rounded-[12px] flex items-center justify-center`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`hidden md:block h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey dark:bg-icon-grey-dark p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]`}>
            <img onClick={toggleDarkMode} src={`${setImage('moon.png')}`} className="'w-full h-full object-contain"/>
          </div>
          <div className={`hidden md:block h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey dark:bg-icon-grey-dark p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]`}>
            <img src="notification.png" className="w-full h-full object-contain"/>
          </div>
        </div>
      </nav>

      {/* The main content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        
        {/* The sidebar */}
        <aside className={`
          border-r border-t dark:border-[#2D2D2D] bg-white dark:bg-dark-mode flex-shrink-0
          fixed md:static inset-y-0 left-0 z-30
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          transition-transform duration-300 ease-in-out
          w-[272px] overflow-y-auto
        `}>
          {/* The user profile details */}
          <div>
            <div className="flex items-center mx-7 pt-6 pb-9">
              <img className="rounded-full h-[52px] w-[52px] mr-3" src="person.png"/>
              <div className="flex flex-col justify-center pr-10">
                <p className={`text-user-name ${isDarkMode ? 'text-white': ''}`}>Gavano</p>
                <p className="text-user-role text-light-grey">HR Manager</p>
              </div>
              <img className="w-[30px] h-[30px]" src={setImage('three-dots.png')}/>
            </div>
          </div>
          {/* The list of menu items */}
          <ol className="flex flex-col gap-4 pb-6 border-b-[1.8px] border-b-[#E8E8E8] dark:border-b-[#2D2D2D] border-dashed mb-[26px]">
            {
              menuList.map((menu, index) => (
                <li className={`flex items-center gap-[20px] pl-10 pr-[75px] py-4 ${menu === 'Dashboard' ? 'bg-search-bar dark:bg-search-bar-dark relative' : ''}`} key={index}>
                  {menu === 'Dashboard' && 
                  <div className="absolute left-0 top-9 -translate-y-1/2 h-[80%]">
                    <img src="/selected_menu.svg" alt="selected indicator" className="h-full" />
                  </div>}
                  <img className="w-[28px] h-[28px]" src={`${menu.toLowerCase()}${isDarkMode ? '-dark' : ''}.png`}/>
                  <p className={`text-menu-text ${menu === 'Dashboard' ? 'text-selected-menu-text' : isDarkMode ? 'text-white': 'text-menu-text'}`}>{menu}</p>
                </li>
              ))
            }
          </ol>
          {/* Profile and settings */}
          <ol>
              <li className="flex items-center gap-[20px] pl-10 pr-[75px] py-4">
                  <img className="w-[28px] h-[28px]" src={setImage('profile.png')}/>
                  <p className="text-menu-text-color dark:text-white text-menu-text">Profile</p>
              </li>
              <li className="flex items-center gap-[20px] pl-10 pr-[75px] py-4">
                  <img className="w-[28px] h-[28px]" src={setImage('setting.png')}/>
                  <p className="text-menu-text-color dark:text-white text-menu-text">Setting</p>
              </li>
          </ol>

        </aside>

        {/* Main content area */}
        <div className="flex-1 bg-main-color dark:bg-[#181818] overflow-y-auto min-w-0">
          <div className="px-4 sm:px-6 md:pl-[42px] md:pr-[26px] pt-6 md:pt-[41px] pb-6 md:pb-[36px]">
            {/* First section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {statisticsList.map((item) => (
                <div key={item.title}>
                  <div className="bg-white dark:bg-dark-mode px-4 sm:px-8 pt-[18px] pb-[23px] h-full rounded-md">
                    <div className="flex items-center">
                      <div className="text-stat-text text-menu-text-color dark:text-white pr-[13px] truncate min-w-0">{item.title}</div>
                      <div className={`inline-flex rounded-[50px] flex-shrink-0 ${item.arrow === 'up' ? 'bg-profit-green dark:bg-[#26DA0B26]': 'bg-loss-red dark:bg-[#FF262638]'}`}>
                        <div className="flex items-center justify-center pr-[3px] pl-1 py-[3px]">
                          <img src={`${item.arrow}-arrow.png`} className="w-3 h-3"/>
                        </div>
                        <p className={`text-profit-text py-[3px] ${item.arrow === 'up' ? 'text-profit-text-green dark:text-[#0EA400]': 'text-loss-text-red dark:text-[#DE1229]'} pr-1 text-xs sm:text-sm`}>{item.percentage}</p>
                      </div>
                    </div>
                    <p className="text-lg sm:text-card-number-text mt-[7px] dark:text-white">{item.number}</p>
                    <p className="text-sm text-gray-500 dark:text-[#A6A6A6]">{item.user_type}</p>
                  </div>
                </div>
              ))
              }
            </section>
            {/* Second section - Graph */} 
            <section className="bg-white dark:bg-dark-mode pl-[30px] pr-[26px] mb-[23px] mt-6">
              <div>
                {/* Chart Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-7 pt-[30px]">
                  <h2 className="text-graph-h1 text-black dark:text-white">Job Statistics</h2>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-[5px]">
                        <div className="w-4 h-4 bg-graph-grey dark:bg-[#2D2D2D]"></div>
                        <span className="text-profit-text text-black dark:text-white">Job View</span>
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <div className="w-4 h-4 bg-graph-purple dark:bg-[#6C49EC]"></div>
                        <span className="text-black text-profit-text dark:text-white">Job Applied</span>
                      </div>
                    </div>
                    <div className="bg-search-bar dark:bg-[#2D2D2D] rounded-[12px]">
                      <div className="flex items-center gap-[10p] p-[10px]">  
                        <span className="text-sm text-[#1A2B88] dark:text-[#8894FF]">This Month</span>
                        <svg className="w-4 h-4 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="w-full h-[239px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={data}
                      barCategoryGap={28}
                      margin={{
                        top: 0,
                        right: 0,
                        left: -27,  // Negative margin to shift left
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid 
                        strokeDasharray="1.19 1.19" 
                        stroke={isDarkMode ? "#2C2C2C" : "#E8E8E8"} 
                        horizontal={true}
                        vertical={false}
                      />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ 
                          fontSize: 14.33, 
                          fill: '#949494', 
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          letterSpacing: '1%'
                        }}
                      />
                      <YAxis 
                        domain={[0, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ 
                          fontSize: 14.33, 
                          fill: '#949494', 
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          letterSpacing: '1%'
                        }}
                      />
                      {/* <Tooltip content={<CustomTooltip />} /> */}
                      
                      {/* Bottom stack - purple */}
                      <Bar dataKey="value1" stackId="a" radius={[8, 8, 8, 8]}>
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={isDarkMode ? "#6C49EC" : "#5832E6"} 
                          />
                        ))}
                      </Bar>
                      
                      {/* Top stack - light purple */}
                      <Bar dataKey="value2" stackId="a" radius={[8, 8, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={isDarkMode ? "#2D2D2D" : "#F2EFFF"} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>
            {/* Third section - Table and pie chart */}
            <div className="grid grid-cols-1 xl:grid-cols-[60%_40%]">
              <section className="bg-white dark:bg-dark-mode pl-[30px] pr-[26px] pt-6 pb-[15px] md:mr-[20px] mb-[23px] xl:mb-0">
                <div>
                  <div className="flex items-center pb-[18px]">
                    <p className="text-table-header dark:text-white">Employee Status</p>
                    <div className="bg-search-bar dark:bg-search-bar-dark ml-auto rounded-[10.87px] h-[34px] w-auto">
                      <div className="flex items-center justify-center gap-[10px] px-[10px] py-[7.5px] sm:px-[10px] sm:py-[7.5px] px-[6px] py-[6px]">
                        <button className="text-filter-text text-filter-blue dark:text-[#8894FF] hidden sm:inline">
                          Filter & Sort
                        </button>
                        <img className="h-[20px] w-[20px]" src={setImage('filter.png')} />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto lg:overflow-x-visible">
                    <table className="w-full table-auto border-collapse text-left min-w-[600px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          {tableHeaders.map((item, index) => (
                            <th
                              key={index}
                              className={`pb-3 text-table-header-grey dark:text-white text-table-header-text whitespace-nowrap ${
                                index === tableHeaders.length - 1 ? 'text-right' : 'pr-4'}`}
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr
                            key={index}
                          >
                            <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black dark:text-white text-table-header-text`}>
                              <div className="flex justify-start items-center">
                                <div className="pr-[4.85px]">
                                  <img 
                                    className="h-[31.7px] w-[31.7px] rounded-full object-cover" 
                                    src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                                    alt="Profile"
                                  />
                                </div>
                                <p>{item[0]}</p>
                              </div>
                            </td>
                            <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black dark:text-white text-table-header-text`}>
                              {item[1]}
                            </td>
                            <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black dark:text-white text-table-header-text`}>
                              {item[2]}
                            </td>
                            <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black dark:text-white text-table-header-text`}>
                              <span className="text-[#16C098]">+</span>{item[3]}
                            </td>
                            <td className={`${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black dark:text-white text-table-header-text`}>
                              <div className={`flex justify-center ${item[4] === 'Permanent'?'bg-[#16C09833]' : 'bg-[#A7A7A733]'} rounded-[4px]`}>
                                <p className={`${item[4] === 'Permanent'?'text-[#16C098]' : 'text-[#5C5C5C]'} px-2 py-1`}>{item[4]}</p>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              {/* Pie chart */}
              <section className="bg-white dark:bg-dark-mode pl-[30px] pr-[20px] pt-6 pb-[15px]">
                <div>
                  <div className="text-center">
                    <p className="text-pie-header-text text-black dark:text-white">Employee Composition</p>
                    {/* Pie chart */}
                    <div className="flex items-center justify-center my-6">
                      <div className="relative">
                        {/* Pie Chart */}
                        <div className="w-[200px] h-[200px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={userData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                startAngle={90}
                                endAngle={450}
                                dataKey="value"
                              >
                                {userData.map((entry, index) => (
                                  <Cell 
                                    key={`cell-${index}`} 
                                    fill={entry.color} 
                                  />
                                ))}
                              </Pie>
                              
                              {/* Male segment (popped out) */}
                              <Pie
                                data={[userData[0]]} // Male data
                                cx="53.5%" 
                                cy="51.5%"
                                innerRadius={50}
                                outerRadius={90} // Larger radius
                                startAngle={90} 
                                endAngle={90 + userData[0].value * 3.6} // End at male segment end
                                dataKey="value"
                              >
                                <Cell fill={userData[0].color} />
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>

                        {/* Labels with icons */}
                        <div className="bg-white dark:bg-[#181818] absolute -left-[27px] top-[35px] flex items-center rounded-[10px]">
                          <div className="flex justify-center items-center p-[10px]">
                            <div className="w-[13px] h-[26px] mr-[10px]">
                              <img src="female.png" />
                            </div>
                            <span className="text-search-text text-black dark:text-white">35%</span>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-[#181818] absolute -right-[30px] bottom-8 flex items-center rounded-[10px]">
                          <div className="flex justify-center items-center p-[10px]">
                            <div className="w-[13px] h-[26px] mr-[10px]">
                              <img src="male.png"/>
                            </div>
                            <span className="text-search-text text-black dark:text-white">65%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-stat-text text-table-header-grey dark:text-[#A6A6A6]">856 employee total</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App