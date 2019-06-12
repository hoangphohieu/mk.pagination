import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './../components/Items';
import * as action from './../actions';

function mapStateToProps(state) {
      return {
            items:state.items.listItem,
            valueToGetAPI:state.valueToGetAPI
      };
}
function mapDispatchToProps(dispatch) {
      return {
            getFirstPage:(param)=>dispatch(action.getPageItems(param)),
            updateItem:(param)=>dispatch(action.updateItem(param)),
            deleteitem:(param) =>dispatch(action.deleteItem(param))
      };
}


class ItemsContainer extends Component {
      render() {
            return (
                  <React.Fragment>
                        <Items {...this.props}/>
                  </React.Fragment>
            );
      }
}

export default connect(
      mapStateToProps,mapDispatchToProps
)(ItemsContainer);