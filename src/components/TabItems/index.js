import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive} from './../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constans'

const TabItems = ({ label, isFocused, onPress, onLongPress }) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>
        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>
        if(label === "Pesanan") return isFocused ? <IconPesananActive/> : <IconPesanan/>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon/>
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};


export default TabItems

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop : 8

    })
})