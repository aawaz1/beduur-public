import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Table1 from './Tables/Table1';

import { useState } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function createData(name, calories, fat, carbs, protein , proteins ,fats) {
    return { name, calories, fat, carbs, protein , proteins , fats };
  }
  
  const rows = [
    createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", "21.03.2021","21.03.2021", <DeleteOutlinedIcon/> ),
    createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", "21.03.2021","21.03.2021", <DeleteOutlinedIcon/> ),
    createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", "21.03.2021","21.03.2021", <DeleteOutlinedIcon/> ),
    createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", "21.03.2021","21.03.2021", <DeleteOutlinedIcon/> ),
     createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", "21.03.2021","21.03.2021", <DeleteOutlinedIcon/> ),
  ];
  

const Admin1 = () => {
    
    return (
        <>
      
        <Table1 title={"Users"} heading={"Add New User"} heading3={"Type"} heading4={"Created"} heading5={"Edited"} heading6={"21.03.2021"}/>
        </>
    //   
      );
}

export default Admin1