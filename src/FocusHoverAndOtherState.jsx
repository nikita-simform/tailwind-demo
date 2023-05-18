const FocusHoverAndOtherstate = () => {
    const people = [
        {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            name: 'Floyd Miles',
            email: 'floyd.miles@example.com',
            imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            name: 'Courtney Henry',
            email: 'courtney.henry@example.com',
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
    ]
    return (
        <div>
            <div className="text-xl ml-8">Pseudo-classes:</div>
            <div className="flex mt-1">
                <div className="relative rounded-xl overflow-auto p-8">
                    <p>Style elements on hover, focus, and active using the hover, focus, and active modifiers:</p>
                    <button class="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
                        Save changes
                    </button>
                </div>
                <div className="px-4">
                    <div className="max-w-md mx-auto bg-white shadow p-8">
                        <p>Style an element when it is the first-child or last-child using the first and last modifiers:</p>
                        <ul role="list" className="p-6 divide-y divide-slate-200">
                            {people.map(person => {
                                return (
                                    <li className="flex py-4 first:pt-0 last:pb-0" key={person.name}>
                                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                                        <div className="ml-3 overflow-hidden">
                                            <p className="text-sm font-medium text-slate-900">{person.name}</p>
                                            <p className="text-sm text-slate-500 truncate">{person.email}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-xl ml-8">Pseudo-elements:</div>
            <div className="mt-4 ml-8">
                <p>Style the ::before and ::after pseudo-elements using the before and after modifiers:</p>
                <div className="p-8 w-full max-w-xl bg-white shadow-lg text-slate-500 dark:bg-slate-800 dark:text-slate-400">Higher resolution means more than just a better-quality image. With a Retina
                    6K display, <a className="text-blue-600 dark:text-sky-400 font-medium after:content-['_↗'] after:text-sm after:font-bold" href="https://www.apple.com/pro-display-xdr/" target="_blank">Pro Display XDR</a> gives you
                    nearly 40 percent more screen real estate than a 5K display.</div>

                <div className="p-8 w-full max-w-xl bg-white shadow-lg text-slate-500 dark:bg-slate-800 dark:text-slate-400">Higher resolution means more than just a better-quality image. With a Retina
                    6K display, <a className="text-blue-600 dark:text-sky-400 font-medium before:content-['_↗'] before:text-sm before:font-bold" href="https://www.apple.com/pro-display-xdr/" target="_blank">Pro Display XDR</a> gives you
                    nearly 40 percent more screen real estate than a 5K display.</div>
            </div>
        </div>

    )
}

export default FocusHoverAndOtherstate;