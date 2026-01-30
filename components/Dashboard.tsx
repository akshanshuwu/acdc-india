
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Menu, 
  X,
  TrendingUp,
  DollarSign,
  Clock,
  AlertCircle,
  MoreVertical
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';
import { TRANSLATIONS } from '../constants';

interface DashboardProps {
  onExit: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock Data for Charts
  const revenueData = [
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 2000 },
    { name: 'Thu', value: 2780 },
    { name: 'Fri', value: 1890 },
    { name: 'Sat', value: 2390 },
    { name: 'Sun', value: 3490 },
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'services', label: 'Services', icon: <ShoppingBag size={20} /> },
    { id: 'inquiries', label: 'Inquiries', icon: <Users size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#F9F9F7] font-sans">
      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-30 w-64 bg-primary text-white transition-transform duration-300 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col
      `}>
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-primary font-bold">A</div>
          <span className="text-xl font-bold tracking-tight">ACDC Admin</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-secondary text-primary font-semibold shadow-lg shadow-black/20' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onExit}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-gray-500 hover:text-primary"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-48 text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold border border-primary/20">
              AD
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
           <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
           <div className="relative z-10 max-w-7xl mx-auto">
             {activeTab === 'overview' && <OverviewTab data={revenueData} />}
             {activeTab === 'services' && <ServicesTab />}
             {activeTab === 'inquiries' && <InquiriesTab />}
             {activeTab === 'settings' && <div className="text-gray-500">Settings module coming soon.</div>}
           </div>
        </main>
      </div>
    </div>
  );
};

// --- Sub Components ---

const OverviewTab = ({ data }: { data: any[] }) => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="₹45,231" 
          trend="+20.1%" 
          trendUp={true} 
          icon={<DollarSign size={24} className="text-primary" />} 
        />
        <StatCard 
          title="Active Repairs" 
          value="12" 
          trend="+4" 
          trendUp={true} 
          icon={<Clock size={24} className="text-orange-600" />} 
        />
        <StatCard 
          title="New Inquiries" 
          value="28" 
          trend="+12%" 
          trendUp={true} 
          icon={<Users size={24} className="text-blue-600" />} 
        />
        <StatCard 
          title="Pending Actions" 
          value="3" 
          trend="-2" 
          trendUp={false} 
          icon={<AlertCircle size={24} className="text-red-600" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Revenue Overview</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-3 py-1 text-gray-600 outline-none">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#103927" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#103927" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#103927" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full mt-2 ${i % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Order #{202400 + i} Completed</p>
                  <p className="text-xs text-gray-500">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-primary font-medium hover:bg-gray-50 rounded-lg transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesTab = () => {
  const services = TRANSLATIONS.en.services.categories;
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
         <h3 className="text-lg font-bold text-gray-800">Active Services</h3>
         <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0A261A] transition-colors shadow-lg shadow-primary/20">
           + Add New Service
         </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
             <div className="flex justify-between items-start mb-4">
               <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-primary font-bold">
                 {service.title.charAt(0)}
               </div>
               <button className="text-gray-400 hover:text-gray-600">
                 <MoreVertical size={18} />
               </button>
             </div>
             <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
             <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
             <div className="flex items-center justify-between text-sm">
               <span className="font-semibold text-primary">{service.priceRange}</span>
               <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InquiriesTab = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Service</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  <div>
                    <div className="font-medium text-gray-900">Rahul Sharma</div>
                    <div className="text-xs text-gray-500">+91 98765 4321{i}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">Mobile Repair</td>
              <td className="px-6 py-4 text-sm text-gray-500">Oct {10 + i}, 2024</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  i === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                }`}>
                  {i === 1 ? 'Pending' : 'Completed'}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-primary font-medium text-sm hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StatCard = ({ title, value, trend, trendUp, icon }: any) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between h-32">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      </div>
      <div className="p-2 bg-gray-50 rounded-lg">
        {icon}
      </div>
    </div>
    <div className={`text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
      {trendUp ? <TrendingUp size={14} /> : <TrendingUp size={14} className="rotate-180" />}
      {trend} <span className="text-gray-400 font-normal">vs last month</span>
    </div>
  </div>
);
