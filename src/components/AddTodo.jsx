import React,{useState} from 'react'


//chakra
import { HStack,Input,Button,useToast} from '@chakra-ui/react'

import {nanoid} from 'nanoid';

const AddTodo = ({todos,setTodos}) => {
    const [Todo,setTodo]=useState('');
    const toast=useToast();

    const handleChange=(e)=>{
        setTodo(e.target.value); 
    }
    const addTodo=()=>{
        if(!Todo){
            toast({
                title:'NO Todo Item to Add',
                status:'error',
                duration:'3000',
                isClosable:true

            })
        };
        const newTodo={
            id:nanoid(),
            text:Todo
        }
        setTodos([...todos,newTodo])
        setTodo('')
    }
    return (
        <HStack>
            <Input
            placeholder='Add Todo item...'
            variant='filled'
            value={Todo}
            onChange={(e)=>handleChange(e)}
            />
            <Button colorScheme='blue' px="8" onClick={()=>addTodo()}>
                Add Todo
            </Button>
        </HStack>
    )
}

export default AddTodo
