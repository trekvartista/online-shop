import { useState, useContext, useEffect } from "react";
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
import { Context } from "../../App";
import { createItem, fetchBrands, fetchTypes } from "../../api/itemAPI";

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

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState('')
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => types.setTypes(data))
        fetchBrands().then(data => brands.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {name: '', description: '', number: Date.now()} ])
    }
    const deleteInfo = (number) => {
        setInfo( info.filter(spec => spec.number !== number) )
    }
    
    const selectFile = (e) => {
        // console.log(e.target.files[0])
        setFile(e.target.files[0])
    }
    
    const changeInfo = (key, value, num) => {
        setInfo(info.map(spec => spec.number === num ? {...spec, [key]: value} : spec))
    }

    const addItem = () => {

        let typeId = 0
        types.types.map( item => {
            if (item.name === type) {
                typeId = item.id
            }
        })

        let brandId = 0
        brands.brands.map( item => {
            if (item.name === brand) {
                brandId = item.id
            }
        })

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', typeId)
        formData.append('brandId', brandId)
        formData.append('info', JSON.stringify(info))

        createItem(formData).then(data => setVisible(false))
        // console.log(formData)
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
                                    types.types.map((type, i) => (
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
                                    brands.brands.map((brand, i) => (
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
                        <Input placeholder="Enter item name..." value={name} onChange={(e) => setName(e.target.value)}/>
                        <Input type="number" placeholder="Enter item price..." className="my-3" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
                        <Input type="file" value={undefined} onChange={selectFile}/> 

                    </Box>
                    <Box className="my-3 py-2">
                        <Button variant="outlined" onClick={() => addInfo()}>Add specification</Button>
                        <Box>
                            {
                                info.map( (item, i) => (
                                    <Box key={i} className="flex flex-row my-2">
                                            <Input placeholder="Title" value={item.title} onChange={(e) => changeInfo('name', e.target.value, item.number)}/>
                                            <Input placeholder="Info"  className="mx-5" value={item.description} onChange={(e) => changeInfo('description', e.target.value, item.number)}/>
                                            <Button variant="outlined" color="error" onClick={() => deleteInfo(item.number)}>Delete</Button>
                                        </Box>
                                    )
                                )
                            }
                        </Box>
                    </Box>

                    <Box className="flex flex-row justify-between max-w-[150px] mt-4 ml-auto">
                        <Button variant="outlined" color="success" onClick={() => addItem()}> 
                            Add
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => setVisible(false)} >
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ItemModal;
