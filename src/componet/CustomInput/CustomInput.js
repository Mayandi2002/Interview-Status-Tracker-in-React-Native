import React from 'react';
import { View, TextInput , StyleSheet} from 'react-native';
const CustomInput =({ Value,setValue, placeholder, keyboardType, placeholderTextColor, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
            Value={Value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        width : '100%',
        borderColor: 'black',
        borderWidth : 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        color:  'black'
    },
});
export default CustomInput;