import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { deleteCareer } from "../features/career/careerSlice";
import { deleteBlog } from "../features/blogs/blogSlice";




export default function DeleteAlert({id, isCareer}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.blog);
  const { careerdata } = useSelector((state) => state.career);

  const handleDelete = (id) => {
    console.log(id, 'handleDelete id')
    
    dispatch ( isCareer ? deleteCareer(id)  :  deleteBlog(id))


    onClose()

  };

  return (
    <>
      <Button  size="sm" onClick={onOpen}>
        {<DeleteIcon color='red'/>}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Blog
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                // onClick={onClose}

                // onClick={() => handleDelete( prop.id)}
                onClick={() => handleDelete(id)}
              
                ml={3}
              >
                   {<DeleteIcon  />}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );

}