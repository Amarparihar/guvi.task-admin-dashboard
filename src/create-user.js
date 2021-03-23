import React from "react";

function Createuser() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <label style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>User Name</label>
            <input className="form-control" type="text" placeholder="user name" style={{border:"1px solid black"}} />
          </div>
          <div className="col-lg-6">
            <label style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>Email Id</label>
            <input className="form-control" type="text" placeholder="user email" style={{border:"1px solid black"}} />
          </div>
          <div className="col-lg-6">
            <label style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>Permenent Address</label>
            <input className="form-control" type="text" placeholder="user Permenent address" style={{border:"1px solid black"}} />
          </div>
          <div className="col-lg-6">
            <label style={{fontFamily:"sans-serif",fontWeight:"bolder"}}> current Address</label>
            <input className="form-control" type="text" placeholder="user current address" style={{border:"1px solid black"}} />
          </div>
          <div className="col-lg-6">
            <label style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>Mobile No.</label>
            <input className="form-control" type="text" placeholder="user contact no" style={{border:"1px solid black"}} />
          </div>
          <div className="col-lg-6">
            <label style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>Alternate Mobile No.</label>
            <input className="form-control" type="text" placeholder="alternate no." style={{border:"1px solid black"}} />
          </div>
         </div>
         <div className="row">
            <div className="col-lg-12" style={{textAlign:"end",marginTop:"5px"}}>
              <button className="btn btn-info">Add User</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Createuser;
