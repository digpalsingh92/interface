import { Bell, ChevronDown, Circle, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-16 p-4 m-0 flex justify-center items-center bg-slate-100">
        <div className="flex h-full w-[13%] gap-2 mx-4">
        <Circle className="text-slate-900 items-center w-8 h-8" />
            <span className="text-slate-900 items-center text-center text-xl">Medicare</span>
        </div >
        <div className="flex h-full w-[80%] flex-1 items-center justify-between"> 
        <div className="flex h-full w-full gap-2 items-center justify-between ">
        <Search className="text-slate-900 items-center " />
          <input className="bg-slate-100 w-full h-14 items-center justify-center p-3 rounded-md border-none" placeholder="Write Here to Search ....."/>
        </div>
        <div className="flex items-center gap-4">
        <div className="">
        <Bell className="text-slate-900" />
        </div>
        <div className=" flex items-center">
        <img src="https://avatars.githubusercontent.com/u/67109815?v=4" alt="profile" className="w-9 h-9 border-solid border-2 rounded-full" />
        </div>
        <div className="flex flex-col items-center">
        <span className="text-slate-900 text-[16px]">Digpal Singh</span>
        <span className="text-slate-600 text-[10px]">Admin</span>
        </div>
        <div><ChevronDown className="text-slate-900" /></div>
        </div>
        </div>
    </div>
  )
}