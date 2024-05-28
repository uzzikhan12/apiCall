import { Box , Button, capitalize} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import BAGrid from "../components/BAGrid";


export default function APIScreen() {

    const [usersList, setUsersList] = useState<any>([])

    const getApiData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res, "Success Response")
                setUsersList([...res.data]);
            }).catch((err) => {
                console.log(err, "Error");
            })
    }

    return(
        <>
            <Box>
                <BAGrid 
                 gridcols={[
                    {
                        key:'name',
                        label:'User Name'   
                    },
                    
                    {
                        key:'email',
                        label:'Email'
                    },

                    {
                        key:'phone',
                        label:'Phone'
                    },

                    {
                        key:'website',
                        label:'Website'
                    },
                 ]}
                 datasource={usersList} />
                <div className="text-center mt-2">
                    <Button onClick={getApiData} sx={{textTransform:'capitalize'}} variant="contained">Get Data</Button>
                </div>

            </Box>
        </>
    );
}