import {test1} from './text1'
import {text} from './text'
import {text2} from './text2'

const textFun = (...arg) => {
    let p1 = document.createElement('p')
    p1.innerHTML = arg.join(' ')
    document.getElementById('root').appendChild(p1)
}
textFun(test1,text,text2)