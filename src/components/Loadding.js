import React, { Component } from 'react';

class Loadding extends Component {
    render() {
        const {isFetching}=this.props.items
        return (
               <React.Fragment>
                    {(isFetching===true)?( <div className="position_loadding">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>):""}
               </React.Fragment>
               
            
        );
    }
}

export default Loadding;