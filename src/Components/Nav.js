import React, { Component } from 'react';
import { 
    NavLink,
    useParams,
} from "react-router-dom";

// function Nav(props) {

    // handleClick() {
    //     props.performSearch
    // }

//     return(
//         <nav className="main-nav">
//             <ul>
//                 <li><NavLink to='/cats'>Cats</NavLink></li>
//                 <li><NavLink to='/dogs'>Dogs</NavLink></li>
//                 <li><NavLink to='/computers'>Computers</NavLink></li>
//             </ul>
//       </nav>
//     )
// }
class Nav extends Component {
    
    // state = {
    //     params: "",
    // }

    // handleParams() {
    //     this.setState({ params: useParams() });
    // }

    // handleClick() {
    //     this.handleParams();
    //     this.props.onClick(this.state.params);
    // }

    render() {
        return(
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/computers'>Computers</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;

// TODO maybe just try passing using the onClick callback on the li element and the pass it the useParams funciton