import HeaderMain from "@/components/shared/header";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

// Define o tipo de um contato
type Contact = {
  id: string;
  name: string;
  phone: string;
  avatarColor: string;
};

// Dados estáticos de contatos
const contacts = {
  frequent: [
    { id: "1", name: "Teresildo Manuel", phone: "0399.2993.12", avatarColor: "bg-yellow-200" },
    { id: "2", name: "Alfredo Manuel", phone: "0123.2993.12", avatarColor: "bg-pink-200" },
    { id: "3", name: "Osvaldo Manuel", phone: "0993.2993.12", avatarColor: "bg-orange-200" },
  ] as Contact[],
  all: [
    { id: "1", name: "Eduardo", phone: "0399.2993.12", avatarColor: "bg-yellow-200" },
    { id: "2", name: "Maria", phone: "0399.2993.12", avatarColor: "bg-pink-200" },
  ] as Contact[],
};

const TransferTo: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  // Renderiza um contato individual
  const renderContact = ({ item }: { item: Contact }) => (
    <TouchableOpacity
      className="flex-row items-center py-3 px-4 border-b border-gray-100"
      onPress={() => console.log(`Selected contact: ${item.name}`)}
    >
      {/* Avatar */}
      <View className={`w-10 h-10 rounded-full ${item.avatarColor} justify-center items-center`}>
        <Text className="text-gray-800 font-bold">{item.name[0]}</Text>
      </View>

      {/* Informações do contato */}
      <View className="flex-1 ml-4">
        <Text className="text-gray-800 font-semibold">{item.name}</Text>
        <Text className="text-gray-500">{item.phone}</Text>
      </View>

      {/* Ícone de seta */}
      <Text className="text-gray-400">{">"}</Text>
    </TouchableOpacity>
  );

  return (
    <>
     <StatusBar backgroundColor='#0844bc' style='light' />
  
    <View className="flex-1 bg-white px-4 py-6">
     <View className="px-5 py-4">
     <HeaderMain search={false} colorWhite={true} />
     </View>
      <Text className="text-2xl font-bold text-gray-800 mb-6">Transferir para </Text>

      {/* Botão de novo contato */}
      <TouchableOpacity
        className="flex-row items-center mb-4"
        onPress={() => console.log("New contact pressed")}
      >
        <View className="w-10 h-10 bg-blue-500 rounded-full justify-center items-center">
          <Text className="text-gray-200 text-lg font-bold">+</Text>
        </View>
        <Text className="ml-4 text-gray-800 font-medium text-lg">Novo contacto</Text>
      </TouchableOpacity>

      {/* Separador */}
      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-[1px] bg-gray-200" />
        <Text className="mx-4 text-gray-500">OU</Text>
        <View className="flex-1 h-[1px] bg-gray-200" />
      </View>

      {/* Barra de pesquisa */}
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
        <Text className="text-gray-400 mr-2">🔍</Text>
        <TextInput
          className="flex-1 text-gray-800"
          placeholder="Search contact"
          value={search}
          onChangeText={(text) => setSearch(text)}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>

      {/* Contatos frequentes */}
      <Text className="text-gray-500 font-bold mb-2">Envios recentes</Text>
      <FlatList
        data={contacts.frequent}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
      />

      {/* Todos os contatos */}
      <Text className="text-gray-500 font-bold mt-6 mb-2">Todos os contacto</Text>
      <FlatList
        data={contacts.all}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
      />
    </View>
    </>
  );
};

export default TransferTo;
