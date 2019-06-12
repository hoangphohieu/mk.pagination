import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../components/SearchItem';
import * as action from './../actions';

function mapDispatchToProps(dispatch) {
      return {
            updateTextSearch: (param) =>dispatch(action.updateTextSearch(param)),
            getFirstPage:(param)=>dispatch(action.getPageItems(param))
      };
}

class SearchItemContainer extends Component {

      
      render() {
            return (
                  <React.Fragment>
                        <SearchItem {...this.props} />
                  </React.Fragment>
            );
      }
}

export default connect(
      null, mapDispatchToProps
)(SearchItemContainer);