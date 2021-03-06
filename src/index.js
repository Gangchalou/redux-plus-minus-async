import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {counter} from './redux/reducers'

//生成一个store对象
const store = createStore(counter)
ReactDOM.render(<App/>, document.getElementById('root'));