// components/CustomSnackbar.js
import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const CustomSnackbar = ({ open, onClose, message, severity }) => {
  return (
    <Snackbar
      open={open} // Controla se o snackbar está visível
      autoHideDuration={3000} // Duração de exibição em milissegundos
      onClose={onClose} // Função para fechar o snackbar
      anchorOrigin={{
        vertical: 'top', // Exibe o snackbar na parte superior
        horizontal: 'center', // Centraliza o snackbar horizontalmente
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity} // Tipo de mensagem ('success', 'error', etc.)
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
