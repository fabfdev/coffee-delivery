import { Text, View } from "react-native";

import { styles } from "./styles";

export function BestCoffee() {
    return (
        <View style={styles.container}>
            <Text>Doce</Text>
            <Text>Mocaccino</Text>
            <Text>Café expresso com calda de chocolate, leite e espuma</Text>
            <Text>R$ 9,90</Text>
        </View>
    )
}