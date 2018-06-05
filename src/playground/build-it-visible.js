class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleDetails() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDetails}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && <p>Here are my details, dawg!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
