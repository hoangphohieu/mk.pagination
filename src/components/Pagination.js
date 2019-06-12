
import React, { Component } from 'react';
import ItemPagination from './ItemPagination';
class Pagination extends Component {

      componentDidMount() {
            this.props.getAllItems({ textSearch: null })
      }
      render() {
            let { totalPage, activePage } = this.props.valueToGetAPI
            return (
                  <div>
                        <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                    {((activePage - 1) > 2) ?
                                          <React.Fragment>
                                                <ItemPagination numberPage={1}  {...this.props} />
                                                <div className="page-link">...</div>
                                          </React.Fragment> : ""
                                    }
                                    {((activePage - 1) > 1) ?
                                          <ItemPagination numberPage={activePage - 2}  {...this.props} /> : ""
                                    }

                                    {((activePage - 1) > 0) ?
                                          <ItemPagination numberPage={activePage - 1}  {...this.props} /> : ""
                                    }

                                    <ItemPagination numberPage={activePage} active={true} {...this.props} />

                                    {((totalPage - activePage) > 0) ?
                                          <ItemPagination numberPage={activePage + 1} {...this.props} /> : ""
                                    }

                                    {((totalPage - activePage) > 1) ?
                                          <ItemPagination numberPage={activePage + 2}  {...this.props} /> : ""
                                    }

                                    {((totalPage - activePage) > 2) ?
                                          <React.Fragment>
                                                <div className="page-link">...</div>

                                                <ItemPagination numberPage={totalPage} {...this.props} />
                                          </React.Fragment> : ""
                                    }

                              </ul>
                        </nav>
                  </div>
            );
      }
}

export default Pagination;