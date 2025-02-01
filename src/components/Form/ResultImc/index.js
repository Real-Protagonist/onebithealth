import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from "./style"

export default function ResultImc(props) {

    // PARTILHAR NAS REDES S. E MAIS
    const onShare = async () => {
        const result = await  Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }

    return (
        <View style={styles.contextImc}>
            {/* BOTÃO DE PARTILHAR (SHARE) */}
            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                    <TouchableOpacity
                    onPress={onShare}
                    style={styles.shared}>
                        <Text style={styles.sharedText}>Share</Text>
                    </TouchableOpacity>
                    : <View />
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}