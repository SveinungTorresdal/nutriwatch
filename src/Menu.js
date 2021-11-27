import React from 'react';

const Stripe = ({ children }) => (
    <div className="pb-1 mb-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <div className="pb-1 bg-gray-50 dark:bg-gray-900">
            {children}
        </div>
    </div>
)

class Menu extends React.Component {
    render () {
        return (
            <div className="mb-8">
                <Stripe>
                    <Stripe>
                        <Stripe>
                            <h1 className="text-4xl font-semi-bold text-gray-900 dark:text-gray-50 p-8 pb-4 pr-24">
                                nutriwatch
                            </h1>
                        </Stripe>
                    </Stripe>
                </Stripe>
            </div>
    )}
}

export default Menu