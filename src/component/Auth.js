import React, { Component } from 'react'

export class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             slectval: ''

        }
    }
    
    handleChange = (e) => {
        console.log(e.target.value)
        const  name = e.target.name;
        const  val = e.target.value;
        this.setState({
            [name]: val
          });

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Enter User Name: <input type="text" name="username" onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Enter Password Name: <input type="text" name="password" onChange={this.handleChange}/>
                    </label><br/>
                    <label>
          Pick your favorite flavor:
          <select value={this.state.value} name="slectval" onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
                    <label>
                        <button> Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default Auth
