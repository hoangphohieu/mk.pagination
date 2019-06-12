import React, { Component } from 'react';

class SearchItem extends Component {
      constructor(props, context) {
            super(props, context);
            this.state = {
                  textSearch: null
            }
      }

      updateTextSearchToState = (e) => { this.setState({ textSearch: e.target.value }) }
      getTextSearch = () => {
            this.props.changeActivePage(1);
            this.props.updateTextSearch(this.state.textSearch);
            this.props.getFirstPage({textSearch:this.state.textSearch,activePage:1}); 
            
      }
      SearchItemByEnter=(e)=>{
            if(e.key==="Enter"){this.getTextSearch()}
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