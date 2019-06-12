import React, { Component } from 'react';

class Items extends Component {
      componentDidMount() {
            this.props.getFirstPage(this.props.valueToGetAPI)
      }
      render() {
           let items=this.props.items;
           console.log(this.props);
           
            if (items) {
                  items = items.map((item, key) => {
                          return (
                              <tr key={key}>
                                  <th scope="row">{item.id}</th>
                                  <td>{item.name}</td>
                                  <td>
                                      <button
                                          className={"btn " + (
                                              (item.isDone)
                                                  ? "btn-primary disable_click "
                                                  : "btn-danger "
                                          ) + "mr-1"} onClick={()=>this.props.updateItem({...this.props.valueToGetAPI,id:item.id})} >V</button>
                                      <button
                                          type="button"
                                          className="btn btn-danger ml-1" onClick={()=>this.props.deleteitem({...this.props.valueToGetAPI,id:item.id})}
                                          >X</button>
                                  </td>
                              </tr>
                          )
                      }) 
              }
           
            return (
                  <React.Fragment>
                        <div className="row">
                              <div className="col-12">
                                    <h2>Items</h2>
                                    <table className="table table-striped">
                                          <thead>
                                                <tr>
                                                      <th scope="col">ID</th>
                                                      <th scope="col">Tên</th>
                                                      <th scope="col">Status</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {items}
                                                
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </React.Fragment>
            );
      }
}

export default Items;