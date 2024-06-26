// src/components/CityForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, FormControl, FormLabel, Box } from '@chakra-ui/react';

const CityForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} mb={4} className="form-container">
      <FormControl>
        <FormLabel>Nome da Cidade</FormLabel>
        <Input {...register('city')} placeholder="Digite o nome da cidade" className="input-city" />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4} className="submit-button">Pesquisar</Button>
    </Box>
  );
};

export default CityForm;
