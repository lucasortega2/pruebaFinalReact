import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import FormSubmitBook from '../components/FormSubmitBook';
import { DialogContent } from '@mui/material';
const style = {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '80vh',
  overflowY: 'auto',
};

export default function EditBookModal({
  dataToEdit,
  openModal,
  handleCloseModal,
}) {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DialogContent>
          <FormSubmitBook
            isEdit={true}
            dataToEdit={dataToEdit}
            handleCloseModal={handleCloseModal}
          />
        </DialogContent>
      </Box>
    </Modal>
  );
}
