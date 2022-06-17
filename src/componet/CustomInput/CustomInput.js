import React from 'react';
import { View, TextInput , StyleSheet} from 'react-native';
const CustomInput = ({ Value, editable, setValue, placeholder, keyboardType, placeholderTextColor, secureTextEntry,autoCapitalize }) => {
    return(
        <View style={styles.container}>
            <TextInput
            value={Value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            editable={editable}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        width : '100%',
        borderColor: 'black',
        borderWidth : 0.5,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        color:  'black'
    },
});
export default CustomInput;