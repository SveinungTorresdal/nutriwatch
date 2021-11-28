import React from 'react';

class Button extends React.Component {
    
    
    render () {
        return (
            <button className="transition duration-150 ease-in-out p-3 m-3 border-2 border-yellow-400 text-gray-900 dark:text-gray-50 hover:bg-yellow-500 hover:bg-opacity-25 focus-within:ring-4 ring-yellow-400 ring-opacity-50 rounded-md shadow-sm font-semibold">
                {this.props.children}
            </button>
        )}
}

export default Button