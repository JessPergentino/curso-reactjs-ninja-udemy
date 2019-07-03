import React from 'react'
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div className='container'>
                <Title name='Jessica' lastname={{first: 'Per', last:'gentino'}}/>
            </div>
        )
    }
})

export default App