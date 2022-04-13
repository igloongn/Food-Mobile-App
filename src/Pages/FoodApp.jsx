import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from "react-native";

const FoodApp = () => {
    return (
        <>
            {/* <View style={styles.space}>
            </View> */}
            <View style={styles.navbar}>
                <Text>
                    Nav Bar Here
                </Text>
            </View>
            <View style={styles.content}>
                <Text>
                    Content Here
                </Text>
            </View>
            <View style={styles.footer}>
                <Text>
                    Footer
                </Text>
            </View>
            <View style={styles.space}>
            </View>
        </>
    )
}

export { FoodApp }



const styles = StyleSheet.create({
    space: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '1%'
    },
    navbar: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#334b21',
        width: '100%',
    },
    content: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f104f',
        width: '100%',
    },
    footer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: StatusBar.currentHeight,
    },
})


