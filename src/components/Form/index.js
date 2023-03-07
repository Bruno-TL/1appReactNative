import { Text, TextInput, View, Button } from "react-native";
import ResultImc from "./ResultImc";


export default function Form () {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex: 1.55" keyboardType="numeric"/>
                <Text>Peso</Text>
                <TextInput placeholder="Ex: 60.5" keyboardType="numeric"/>
                <Button title="Calcular IMC"/>
            </View>
             <ResultImc messageResultImc={messageImc} resultImc={imc}/> 
        </View>
    );
}
