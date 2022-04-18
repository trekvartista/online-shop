import { Pagination, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../App";

const Pages = () => {
    const { items } = useContext(Context);

    const [page, setPage] = useState(1);
    
    const handleChange = (e, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
    );
};

export default Pages;
