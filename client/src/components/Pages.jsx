import { Pagination, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../App";

const Pages = ({ page, handlePageChange, pagesCount }) => {

    const { items } = useContext(Context);

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={pagesCount} page={page} onChange={handlePageChange} />
        </Stack>
    );
};

export default Pages;
