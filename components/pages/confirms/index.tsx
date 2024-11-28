import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const ConfirmRegister = () => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(32);

  // Simulação do contador de tempo
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Formatação do código digitado (XXX-XXX)
  const handleInputChange = (value:any) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue =
      numericValue.slice(0, 3) +
      (numericValue.length > 3 ? `-${numericValue.slice(3, 6)}` : "");
    setCode(formattedValue);
  };

  // Adiciona número pelo teclado personalizado
  const handleKeyboardPress = (num:any) => {
    if (code.replace(/[^0-9]/g, "").length < 6) {
      handleInputChange(code + num);
    }
  };

  // Remove o último caractere
  const handleBackspace = () => {
    const numericValue = code.replace(/[^0-9]/g, ""); // Remove o traço
    const updatedValue = numericValue.slice(0, -1); // Remove o último caractere
    handleInputChange(updatedValue);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white justify-center items-center p-4"
      behavior="padding"
    >
      {/* Header */}
      <Text className="text-xl font-bold text-blue-600 mb-6">AngoaWallet</Text>

      {/* Body */}
      <View className="w-full items-center px-6">
        <Text className="text-gray-700 text-center mb-4">
          Um SMS enviado para o seu email kambaiaalberto@gmail.com
        </Text>
        <TextInput
          className="w-full border-b-2 border-blue-500 text-center text-lg text-gray-800 py-2 mb-4"
          value={code}
          onChangeText={handleInputChange}
          placeholder="XXX-XXX"
          maxLength={7} // Incluindo o traço
          keyboardType="numeric"
        />
        <Text className="text-gray-500">
          Reenviar código{" "}
          <Text className="text-blue-500 font-bold">
            {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : "Now"}
          </Text>
        </Text>
      </View>

      {/* Custom Keyboard */}
      <View className="w-full mt-6">
        <View className="flex-row justify-around mb-4">
          {[1, 2, 3].map((num) => (
            <TouchableOpacity
              key={num}
              className="bg-gray-100 rounded-full p-4"
              onPress={() => handleKeyboardPress(num.toString())}
            >
              <Text className="text-xl font-semibold">{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-around mb-4">
          {[4, 5, 6].map((num) => (
            <TouchableOpacity
              key={num}
              className="bg-gray-100 rounded-full p-4"
              onPress={() => handleKeyboardPress(num.toString())}
            >
              <Text className="text-xl font-semibold">{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-around mb-4">
          {[7, 8, 9].map((num) => (
            <TouchableOpacity
              key={num}
              className="bg-gray-100 rounded-full p-4"
              onPress={() => handleKeyboardPress(num.toString())}
            >
              <Text className="text-xl font-semibold">{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-around">
          <TouchableOpacity
            className="bg-gray-100 rounded-full p-4"
            onPress={() => handleKeyboardPress("0")}
          >
            <Text className="text-xl font-semibold">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-100 rounded-full p-4"
            onPress={handleBackspace}
          >
            <Text className="text-xl font-semibold">⌫</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Done Button */}
      <TouchableOpacity className="bg-blue-500 w-full py-4 rounded-full mt-8">
        <Text className="text-center text-white text-lg font-semibold">
          Feito
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ConfirmRegister;
