import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            value : ''
        }
    }

     onChangeHandler  = (e) =>{

        this.setState({
            value:e.target.value
        })
    }
     onSubmitHandler = (event)=>{
        event.preventDefault();
        if(this.state.value !== ''){
            this.props.onsubmit(this.state.value)
        }
        
        
        
    }


    
    render() {
        return (
            <>
                <form className="ui form" onSubmit={this.onSubmitHandler} >
                    <div className="ui action input">
                        <input type="text" placeholder="Search..." value={this.state.value} onChange={this.onChangeHandler}/>
                    </div>
                    <input type='submit' className="ui submit button"/>
                </form>
            </>
        )
    }
}
