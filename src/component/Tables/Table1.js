import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Button, MenuItem, Modal, TextField, Typography } from '@mui/material';
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


  

const Table1 = ({title , heading , heading3 , heading2 , heading4 , heading5 , heading6}) => {
  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (event) => {
    const inputDate = event.target.value;

    // Check if the input matches the desired format (YYYY-MM-DD)
    if (/^\d{4}-\d{2}-\d{2}$/.test(inputDate)) {
      setDateValue(inputDate);
    }
  };
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    function createData(name, calories, fat, carbs, protein , proteins ,fats) {
      return { name, calories, fat, carbs, protein , proteins , fats };
    }
    
    const rows = [
      createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", heading6 ? heading6 : null,heading6 ? "21.03.2021" : null, <DeleteOutlinedIcon/> ),
      createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", heading6 ? "21.03.2021" : null,heading6 ? "21.03.2021" : null,<DeleteOutlinedIcon/> ),
      createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", heading6 ? "21.03.2021" : null,heading6 ? "21.03.2021" : null, <DeleteOutlinedIcon/> ),
      createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", heading6 ? "21.03.2021" : null,heading6 ? "21.03.2021" : null, <DeleteOutlinedIcon/> ),
       createData('Analysis Name', 'Founder Break-Even Calculator', +91-7895461235, "E-Book User", heading6 ? "21.03.2021" : null,heading6 ? "21.03.2021" : null, <DeleteOutlinedIcon/> ),
    ];

    return (
        <>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='rounded-xl' sx={style}>
          <div className='flex flex-col gap-4'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Testiomonals
          </Typography>
          <TextField id="outlined-basic" label="Your Name" variant="outlined" />
         
          <TextField id="outlined-basic" label="Your Email Address" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField
      id="outlined-basic"
      select
      label="Select Type"
    
      variant="outlined"
    >
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </TextField>
          <TextField rows={8} multiline id="outlined-basic" label="Comment" variant="outlined" />
          <button  className='rounded-md p-3  text-white font-medium bg-custom-blue'>ADD TESTIMONALS</button>
          
          </div>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='rounded-xl' sx={style}>
          <div className='flex flex-col gap-4'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Appointment
          </Typography>
          <TextField id="outlined-basic" label="Your Name" variant="outlined" />
         
          <TextField id="outlined-basic" label="Your Email Address" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField
      id="outlined-basic"
      select
      label="Service Type"
    
      variant="outlined"
    >
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </TextField>
    <TextField
      id="outlined-basic"
      select
      label=" Type"
    
      variant="outlined"
    >
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </TextField>
    <TextField
      id="date-input"
      label="Enter Date"
      placeholder="YYYY-MM-DD"
      variant="outlined"
      multiline
      value={dateValue}
      onChange={handleDateChange}
      InputProps={{
        inputProps: {
          pattern: '\\d{4}-\\d{2}-\\d{2}',
        },
      }}
    />
     <TextField
      id="date-input"
      label="Enter Time"
      placeholder="YYYY-MM-DD"
      variant="outlined"
      multiline
      value={dateValue}
      onChange={handleDateChange}
      InputProps={{
        inputProps: {
          pattern: '\\d{4}-\\d{2}-\\d{2}',
        },
      }}
    />
          
          <button  className='rounded-md p-3  text-white font-medium bg-custom-blue'>ADD APPOINTMENT</button>
          
          </div>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='rounded-xl' sx={style}>
          <div className='flex flex-col gap-4'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <TextField id="outlined-basic" label="Your First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Your Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Your Email Address" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField id="outlined-basic" label="Select Type" variant="outlined" />
          <button  className='rounded-md p-3  text-white font-medium bg-custom-blue'>ADD USER</button>
          
          </div>
        </Box>
      </Modal>
       <div className='p-2'>
        <div className='text-md font-semibold font-poppins px-4'>{title}</div>
        <div className='rounded-md shadow-md'>
        <div className='flex justify-between gap-4 p-2'>
            <input style={{ border: "1px solid gray" }} className='rounded-full px-9' placeholder='Search'/>
            <div className='flex justify-center items-center gap-2'>
            {heading2 ? <button className='bg-custom-blue p-2 px-4 rounded-full text-white'>History</button> : null}
           {heading ? <button onClick={heading === 'Add Testimonals' ? handleOpen2 : heading === 'Add New Booking' ? handleOpen3 : handleOpen} className='bg-custom-blue p-2 px-4 rounded-full text-white'>{heading}</button>:null}
            </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='font-semibold font-poppins'><h1 className='font-poppins text-semibold'>Name</h1></TableCell>
                <TableCell align="right">Email Id </TableCell>
                <TableCell align="right">Phone Number</TableCell>
                {heading3 ? <TableCell align="right">{heading3}</TableCell> : <TableCell align="right"></TableCell>}
               {heading4 ?  <TableCell align="right">{heading4} </TableCell> : <TableCell align="right"></TableCell>}
               {heading5 ?  <TableCell align="right">{heading5} </TableCell> : <TableCell align="right"></TableCell>}
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.proteins}</TableCell>
                  <TableCell align="right">{row.fats}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='flex gap-5 justify-end items-center text-center p-2'>
            <img src='/a.png'/>
            <h2>2</h2>
            <h2>3</h2>
            <h2>4</h2>
            <h2>5</h2>
        </div>

        </div>
       </div>
      </>);
}

export default Table1