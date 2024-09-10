import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import { BiBorderRadius } from 'react-icons/bi';
import CircularProgress from '@mui/material/CircularProgress';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface BasicModalProps {
    open: boolean;
    handleClose: () => void;
    wordsData: {
        word: string;
        translation: string;
        words_id: number;
    }
    isLoading: boolean;
    handleSaveWord: () => void;
}

export default function BasicModal({ open, handleClose, wordsData, isLoading, handleSaveWord }: BasicModalProps) {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} borderRadius={4}>
                    <Stack alignItems={'center'} spacing={4}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            {wordsData && wordsData.word}
                        </Typography>
                        <Typography id="modal-modal-description" variant='h5' sx={{ mt: 2 }}>
                            {wordsData && wordsData.translation}
                        </Typography>

                        {wordsData && <Button
                            onClick={() => handleSaveWord(wordsData.words_id)}
                            disabled={isLoading}
                            variant='contained'
                            sx={{
                                backgroundColor: '#6D6DFA',
                                width: '100%',
                                textTransform: 'none',
                                fontSize: 16,
                                gap: 1
                            }}>
                            Adicionar palavra a Revisão
                            {isLoading && <CircularProgress color="inherit" size={24} />}
                        </Button>}
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}