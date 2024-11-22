import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
type SearchProps={
    search: string 
    setSearch: (value:string)=>void
}
export default function SearchBar({ setSearch, search }: SearchProps) {

  return (
    <View style={styles.container} className='p-20'>
      <TextInput
      value={search}
        style={styles.input}
        placeholder="Pesquisa..."
        placeholderTextColor="#ccc" // Cor do placeholder para se destacar melhor no fundo escuro
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: '#000', // Fundo preto
    color: '#fff', // Texto branco
    borderColor: '#555', // Borda com cor preta suave
    borderWidth: 1, // Espessura da borda
    padding: 10, // Padding para espaçamento interno
    borderRadius: 10, // Borda arredondada
  },
});
