import * as C from "@chakra-ui/react";
import React from "react";

const Step = ({index, active}) => {
    return(
        <C.Center>
            <C.Box 
            py={4} 
            px={4} 
            borderRadius={2} 
            bg={active ? 'green.500' : 'gray.300'} 
            color={active ? 'white' : 'black'}
            style={{scale: active ? '1.2' : 'none'}}>

                {index}
            </C.Box>
            
        </C.Center>
    )
}

export default Step
