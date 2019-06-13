import React, { Component } from 'react';

class SearchItem extends Component {
      constructor(props, context) {
            super(props, context);
            this.state = {
                  textSearch: null
            }
      }
      // input thay đổi thí state thay đổi theo
      updateTextSearchToState = (e) => { this.setState({ textSearch: e.target.value }) }

      // click butoon Search thì thực hiện cái này
      getTextSearch = () => {
            this.props.changeActivePage(1);  // trigger container => dispatch action chuyển activePage về 1
            this.props.updateTextSearch(this.state.textSearch);   // trigger container => dispatch action chuyển textSearch lên Reducer
            this.props.getFirstPage({ textSearch: this.state.textSearch, activePage: 1 }); // trigger container tải vể trang đầu tiên của search

      }

      // thay vì click thì ấn enter cũng được
      SearchItemByEnter = (e) => {
            if (e.key === "Enter") { this.getTextSearch() }
      }
      render() {
            return (
                  <React.Fragment>
                        <div className="row">
                              <div className="col-12">
                                    <h2>Search item</h2>
                                    <div className="input-group mb-3">
                                          <input type="text" className="form-control" placeholder="Search item ..."
                                                onChange={this.updateTextSearchToState} onKeyDown={this.SearchItemByEnter} />
                                          <div className="input-group-append">
                                                <button className="btn btn-outline-primary" type="button" onClick={this.getTextSearch}>Search</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </React.Fragment>
            );
      }
}

export default SearchItem;