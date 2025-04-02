import React, {Component} from 'react'
import a from '../css/style1.module.css'
export default class About extends Component{
    render(){
        return(
            <div>
          <h1 style={{color : 'pink',background : 'purple'}}><center>THIS IS CLASS COMPONENT</center></h1> 
          <h2 className={a.b}><center>we can apply css in react</center></h2>
          <h2 className={a.c}><center>we can apply css in react</center></h2>
            </div>
        )
    }
}