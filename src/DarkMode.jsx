import { useState } from "react";

const sample = () => {
    return (
        <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-1/5 mt-5">
            <div>
                <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
        </div>
    )
}
const DarkMode = () => {
                
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div>
            <h1>Dark Mode:</h1>
            {/* {sample()} */}

            <div class="mt-4"> 
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" onChange={(e) => { setDarkMode(!darkMode) }} />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                </label>
            </div>
            <div className={darkMode ? "dark" : ""}>
                {sample()}
            </div>
        </div>
    )
}
export default DarkMode;