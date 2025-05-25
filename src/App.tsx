import { useState } from 'react'
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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
    "Permanent"
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

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <nav className="flex flex-col sm:flex-row items-start sm:items-center pt-4 sm:pt-6 px-4 sm:px-12 gap-4 sm:gap-0 border-b border-gray-e8 flex-shrink-0">
        {/* The main logo */}
        <img className="flex-none h-8 sm:h-auto mb-2 sm:mb-6" src="main-logo.png" alt="The main logo"/>
        
        {/* The search bar */}
        <div className="flex-1 w-full sm:w-auto sm:ml-[89px] order-3 sm:order-2 mb-2 sm:mb-6 sm:min-w-0">
          <div className="flex items-center bg-search-bar h-[45px] sm:h-[54px] w-full sm:max-w-[652px] rounded-[6px]">
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
            className="md:hidden h-[40px] w-[40px] bg-icon-grey p-[6px] rounded-[12px] flex items-center justify-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]">
            <img src="moon.png" className="w-full h-full object-contain"/>
          </div>
          <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] bg-icon-grey p-[6px] sm:p-[7.5px] rounded-[12px] sm:rounded-[15px]">
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
          border-r border-t border-gray-e8 bg-white flex-shrink-0
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
                  <p className={`text-menu-text ${menu === 'Dashboard' ? 'text-selected-menu-text' : 'text-menu-text-color'}`}>{menu}</p>
                </li>
              ))
            }
          </ol>
          {/* Profile and settings */}
          <ol>
              <li className="flex items-center gap-[20px] pl-10 pr-[75px] py-4">
                  <img className="w-[28px] h-[28px]" src={`profile.png`}/>
                  <p className="text-menu-text-color text-menu-text">Profile</p>
              </li>
              <li className="flex items-center gap-[20px] pl-10 pr-[75px] py-4">
                  <img className="w-[28px] h-[28px]" src="setting.png"/>
                  <p className="text-menu-text-color text-menu-text">Setting</p>
              </li>
          </ol>
        </aside>

        {/* Main content area */}
        <div className="flex-1 bg-main-color overflow-y-auto min-w-0">
          <div className="px-4 sm:px-6 md:pl-[42px] md:pr-[26px] pt-6 md:pt-[41px] pb-6 md:pb-[36px]">
            {/* First section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {statisticsList.map((item) => (
                <div key={item.title}>
                  <div className="bg-white px-4 sm:px-8 pt-[18px] pb-[23px] h-full rounded-md">
                    <div className="flex items-center">
                      <div className="text-stat-text text-menu-text-color pr-[13px] truncate min-w-0">{item.title}</div>
                      <div className={`inline-flex rounded-[50px] flex-shrink-0 ${item.arrow === 'up' ? 'bg-profit-green': 'bg-loss-red'}`}>
                        <div className="flex items-center justify-center pr-[3px] pl-1 py-[3px]">
                          <img src={`${item.arrow}-arrow.png`} className="w-3 h-3"/>
                        </div>
                        <p className={`text-profit-text py-[3px] ${item.arrow === 'up' ? 'text-profit-text-green': 'text-loss-text-red'} pr-1 text-xs sm:text-sm`}>{item.percentage}</p>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl font-semibold mt-2">{item.number}</p>
                    <p className="text-sm text-gray-500">{item.user_type}</p>
                  </div>
                </div>
              ))
              }
            </section>
            {/* Second section - Graph */} 
            <section className="bg-white pl-[30px] pr-[26px] mb-[23px] mt-6">
              <div>
                {/* Chart Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-7 pt-[30px]">
                  <h2 className="text-graph-h1 text-black">Job Statistics</h2>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-[5px]">
                        <div className="w-4 h-4 bg-graph-grey"></div>
                        <span className="text-profit-text text-black">Job View</span>
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <div className="w-3 h-3 bg-graph-purple rounded"></div>
                        <span className="text-black text-profit-text">Job Applied</span>
                      </div>
                    </div>
                    <div className="bg-search-bar rounded-[12px]">
                      <div className="flex items-center gap-[10p] p-[10px]">  
                        <span className="text-sm text-[#1A2B88]">This Month</span>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        stroke="#E8E8E8" 
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
                            fill="#5832E6" 
                          />
                        ))}
                      </Bar>
                      
                      {/* Top stack - light purple */}
                      <Bar dataKey="value2" stackId="a" radius={[8, 8, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill="#F2EFFF" 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>
            {/* Third section - Table and pie chart */}
            <div className="grid grid-cols-2">
              <section className="bg-white pl-[30px] pr-[26px] pt-6 pb-[15px] mr-[30px]">
                <div>
                  <div className="flex items-center pb-[18px]">
                    <p className="text-table-header">Employee Status</p>
                    <div className="bg-search-bar ml-auto rounded-[10.87px] h-[34px] w-[131px]">
                      <div className="flex items-center justify-center gap-[10px] px-[10px] py-[7.5px]">
                        <button className="text-filter-text text-filter-blue">Filter & Sort</button>
                        <img className="h-[20px] w-[20px]" src="filter.png"/>
                      </div>
                    </div>
                  </div>
                  <table className="w-full table-auto border-collapse text-left">
                    <thead>
                      <tr className="border-b border-[#E8E8E8]">
                        {tableHeaders.map((item, index) => (
                          <th
                            key={index}
                            className={`pb-3 text-table-header-grey text-table-header-text whitespace-nowrap ${
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
                          <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black text-table-header-text`}>
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
                          <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black text-table-header-text`}>
                            {item[1]}
                          </td>
                          <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black text-table-header-text`}>
                            {item[2]}
                          </td>
                          <td className={`pr-4 ${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black text-table-header-text`}>
                            <span className="text-[#16C098]">+</span>{item[3]}
                          </td>
                          <td className={`${index === 0 ? 'pt-[21px] pb-[18px]': 'pb-[18px]'} text-black text-table-header-text`}>
                            <div className="flex justify-center bg-[#16C09833] rounded-[4px]">
                              <p className="text-[#16C098] px-2 py-1">{item[4]}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
              {/* Pie chart */}
              <section className="bg-white pl-[30px] pr-[26px] pt-6 pb-[15px]">
                <div>
                  <div>
                    <p className="text-pie-header-text text-black">Employee Composition</p>
                    {/* Pie chart */}
                    <div>

                    </div>
                    <p className="text-stat-text text-table-header-grey">856 employee total</p>
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