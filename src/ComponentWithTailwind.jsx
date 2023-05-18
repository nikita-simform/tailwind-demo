import reactLogo from './assets/react.svg';

const ComponentWithTailwind = () => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-5">
            <div className="shrink-0">
                <img className="h-12 w-12" src={reactLogo} alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">Welcome to tailwind CSS demo</div>
                <p className="text-slate-500">This is a class with Tailwind CSS</p>
            </div>
        </div>
    )
}

export default ComponentWithTailwind;