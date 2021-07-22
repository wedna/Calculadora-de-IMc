import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
export default function App() {

  const[peso, alterapeso] = useState();
  const[altura, alteraaltura] = useState();
  const[imc, alteraimc]= useState();
  const[grau, alteragrau]= useState();
  const[classificacao, alteraclassificacao]= useState();
  const[cor, alteracor] = useState('#eee');


  function calcular(){
    const Cimc = parseFloat(peso/(altura*altura));
    if (Cimc < 18.5) {
      alteraimc(Cimc);
      alteragrau('0');
      alteraclassificacao('magreza!');
      alteracor('#7D7A7A')   
    }
    if (Cimc >=18.5 && Cimc < 24.9){
      alteraimc(Cimc);
      alteragrau("0");
      alteraclassificacao("Normal");
      alteracor('#24D479')
    }
    if (Cimc >=24.9 && Cimc < 29.9){
      alteraimc(Cimc);
      alteragrau('1');
      alteraclassificacao('Sobrepeso');
      alteracor('#E66769')
    }
    if (Cimc >= 29.9 && Cimc < 39.9){
      alteraimc(Cimc);
      alteragrau("2");
      alteraclassificacao('Obesidade');
      alteracor('#F7562A')
    }
    if (Cimc >=39.9 ){
      alteraimc(Cimc);
      alteragrau('3');
      alteraclassificacao('Obesidade Grave!');
      alteracor('#FA0201')
    }

  }
  return (
    <Tela>
      <Titulo>Calculadora IMC</Titulo>
      <Input keyboardType="numeric" values={peso} onChangeText={(altera)=>{alterapeso(altera)}} placeholder="Digite seu peso"/>
      <Input keyboardType="numeric" values={altura} onChangeText={(altera)=>{alteraaltura(altera)}} placeholder="Digite sua altura"/>
      <BtnCalcular title = "Calcular" onPress={()=>{calcular()}}/>
      <Resultado style= {{backgroundColor:cor}}>
        
        <ItemResultado>Imc: {imc}</ItemResultado>
        <ItemResultado>Grau: {grau}</ItemResultado>
        <ItemResultado>Classificação: {classificacao}</ItemResultado>
        
      </Resultado>

      
    </Tela>
  );
}
const TituloResultado = styled.Text`
  font-size: 20px;
`;
const ItemResultado =styled.Text`
  font-size: 16px;
`;

const Resultado = styled.View`
  margin-top: 10px;
  background-color: #eee;
  width: 100%;
  align-items: center;
`;
const BtnCalcular = styled.Button`
  margin-top: 20px;
`;

const Input = styled.TextInput`
width: 90%;
background-color: #99A8B0;
height: 50px;
font-size: 20px;
padding-left:10px;
border-radius: 10px;

`;
const Titulo = styled.Text`
  margin-top: 30px;
  font-size: 45px; 
  background-color:#B2B0BB;
`;

const Tela = styled.View`
  flex:1;
  align-items: center;
  background-color:#B2B0BB;
`;
