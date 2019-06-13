import React, { Component } from 'react';

class ItemPagination extends Component {
    // trigger khi click thẻ pagination 
      pageToActive = () => {
            // trigger lên container để chuyển page được click thành active Page
            this.props.changeActivePage(this.props.numberPage);

            // trigger lên container để getPageItem
            this.props.getPageItem({...this.props.valueToGetAPI, activePage:this.props.numberPage})
    }
    render() {

        return (
            <React.Fragment>
                <li className={"page-item " + ((this.props.active) ? "active" : "")}>
                    <a className="page-link" href="#" onClick={this.pageToActive}>{this.props.numberPage}</a>
                </li>
            </React.Fragment>
        );
    }
}

export default ItemPagination;