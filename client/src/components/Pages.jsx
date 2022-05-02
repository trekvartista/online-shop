import { Pagination, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../App";

const Pages = ({ page, handlePageChange, pagesCount }) => {

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={pagesCount || 1} page={page || 1} onChange={handlePageChange} />
        </Stack>
    );
};

export default Pages;
