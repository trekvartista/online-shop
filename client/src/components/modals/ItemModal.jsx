import { useState, useContext } from "react";
import {
    Box,
    Button,
    FormControl,
    Input,
    InputLabel,
    Menu,
    MenuItem,
    Modal,
    Select,
    Typography,
} from "@mui/material";
import { Context } from "../../main";

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

const ItemModal = ({ show, setVisible }) => {

    const { brands, types } = useContext(Context)

    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {name: '', description: '', number: Date.now()} ])
    }
    const deleteInfo = (number) => {
        // console.log(number)
        // debugger
        setInfo( info.filter(spec => spec.number !== number) )
    }

    return (
        <div className="flex mt-5">
            <Button variant="outlined" onClick={() => setVisible(true)}>
                Add a new device/item
            </Button>
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
                        Add a new item
                    </Typography>

                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Select type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="__________"
                                onChange={(e) => setType(e.target.value)}
                            >
                                {
                                    types.map((type, i) => (
                                        <MenuItem key={i} value={type.name}>
                                            {type.name}
                                        </MenuItem>
                                        )
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    
                    <Box className="my-3">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label-2">
                                Select brand
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label-2"
                                id="demo-simple-select-2"
                                value={brand}
                                label="__________"
                                onChange={(e) => setBrand(e.target.value)}
                            >
                                {
                                    brands.map((brand, i) => (
                                        <MenuItem key={i} value={brand.name}>
                                            {brand.name}
                                        </MenuItem>
                                        )
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    
                    <Box>
                        <Input placeholder="Enter item name..." />
                        <Input type="number" placeholder="Enter item price..." className="my-3" />
                        <Input type="file" /> 

                    </Box>
                    <Box className="my-3 py-2">
                        <Button variant="outlined" onClick={() => addInfo()}>Add specification</Button>
                        <Box>
                            {
                                info.map( (item, i) => (
                                    <Box key={i} className="flex flex-row my-2">
                                            <Input placeholder="Title" />
                                            <Input placeholder="Info"  className="mx-5"/>
                                            <Button variant="outlined" color="error" onClick={() => deleteInfo(item.number)}>Delete</Button>
                                        </Box>
                                    )
                                )
                            }
                        </Box>
                    </Box>

                    <Box className="flex flex-row justify-between max-w-[150px] mt-4 ml-auto">
                        <Button variant="outlined" color="success" > 
                            Add
                        </Button>
                        <Button variant="outlined" onClick={() => setVisible(false)} >
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ItemModal;
