import "./userList.css"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userRows } from "../../data";
import { useState } from "react";

const UserList = () => {

    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(()=> data.filter(item => item.id !== id ))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'UserName', width: 200, renderCell: (params) => {
                return (
                <div className="userListUser">
                        <img src={params.row.avatar} alt="" class="userListImg" />
                        { params.row.username}
                </div>
            )
         }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlined className="userListDelete" onClick={ ()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
          },
      ];
      
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default UserList