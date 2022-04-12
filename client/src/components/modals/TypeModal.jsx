import { useContext, useState } from "react";
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import {Context} from '../../App'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const TypeModal = ({ show, setVisible }) => {

    const { types } = useContext(Context);

    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="flex mt-5">
            <Button variant="outlined" onClick={() => setVisible(true)}>Add a new type</Button>
            <Modal
                open={show}
                onClose={() => setVisible(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add a new type
                    </Typography>
                    
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Select type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="_________"
                            onChange={handleChange}
                        >
                            {types.map((type, i) => (
                                <MenuItem key={i} value={type.name}>
                                    {type.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div className="flex flex-row justify-between max-w-[150px] mt-4 ml-auto">
                        <Button variant="outlined" color="success"> Add </Button>
                        <Button variant="outlined" onClick={() => setVisible(false)}> Close </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default TypeModal;
