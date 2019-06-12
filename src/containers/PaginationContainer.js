import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
import Pagination from '../components/Pagination';

function mapStateToProps(state) {
      return {
            valueToGetAPI:state.valueToGetAPI
      };
}
function mapDispatchToProps(dispatch) {
      return {
            getAllItems:(param)=>dispatch(action.getAllItems(param)),  // lấy total page
            changeActivePage:(param)=>dispatch(action.changeActivePage(param)), // đưa active page lên reducer
            getPageItem:(param)=> dispatch(action.getPageItems(param)) //  get page items khi click 
      };
}

class PaginationContainer extends Component {
      render() {
            return (
                 <React.Fragment>
                       <Pagination {...this.props}/>
                 </React.Fragment>
            );
      }
}

export default connect(
      mapStateToProps,mapDispatchToProps
)(PaginationContainer);