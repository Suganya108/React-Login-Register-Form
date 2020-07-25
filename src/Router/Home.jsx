import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:''
        }
    }

    componentDidMount() {
        const headers = { 'Content-Type': 'application/json','authorization':localStorage.token }
        fetch('http://localhost:5000/home', { headers })
            .then(response => response.json())
            .then(data => this.setState({ message: data.message }));
    }
    refreshPage=()=> {
    window.location.reload(false);
}
    render() {
        return (
            <div>
                {this.state.message === 'Please Login To See This Page...!!!' ?
                    (<div><h1>{this.state.message}</h1></div>) :
                    (<div>
                        <h1>{this.state.message}</h1>
                        <button onClick={() => {
                            localStorage.removeItem('token');
                            this.refreshPage();
                        }}>Logout</button>
                    </div>)
                }
            </div>
        )
    }
}

export default Home;
