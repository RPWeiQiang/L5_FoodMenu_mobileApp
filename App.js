import React from 'react';
import { View, Text, Image, SectionList, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
    {
        data: [
            { key: 'Beef Burgers', img: 'https://thebreakfastclubofocoee.com/wp-content/uploads/2017/03/BREAKFAST-CLUB-burger-1.jpg', des:'A juicy and flavorful beef patty served in a toasted bun, often topped with fresh lettuce, tomato, cheese, and savory sauces.', price:8.50  },
            { key: 'Fried Chicken Burger', img: 'https://th.bing.com/th/id/OIP.5MCD2dZSY_SNanc3rNXRegHaHa?rs=1&pid=ImgDetMain', des:'A crispy, golden-fried chicken fillet served in a soft bun, paired with fresh toppings and zesty sauces.',price:8   },
        ],
        title: "Burger", bgColor: "skyblue", textColor: "#02669f", icon: ''
    },
    {
        data: [
            { key: 'Spaghetti Carbonara', img: 'https://i.pinimg.com/474x/d5/4c/25/d54c25a53f347e55f902af0e0b54f59f.jpg', des:'A creamy Italian pasta dish made with eggs, Parmesan cheese, pancetta, and black pepper for a rich and savory flavor.',price:7.50 },
            { key: 'Penne alla Vodka', img: 'https://tomatoestomahtos.com/wp-content/uploads/2021/11/one-pot-penne.jpg',des:'A creamy and rich pasta dish made with penne tossed in a luscious tomato-vodka sauce, finished with a touch of cream and Parmesan cheese.',price:9.50 },
        ],
        title: "Pasta", bgColor: "orange", textColor: "#c14f07", icon: ''
    },
    {
        data: [
            { key: 'Tiramisu', img: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg', des:'A classic Italian dessert with layers of coffee-soaked ladyfingers, creamy mascarpone, and a dusting of cocoa powder.',price:7  },
            { key: 'Cheesecake', img: 'https://www.cookingclassy.com/wp-content/uploads/2019/11/cheesecake-8.jpg', des:'A rich and creamy dessert with a buttery crust, often topped with fruit, chocolate, or a sweet glaze.',price:7   },
            { key: 'Waffles W Vanilla Ice Cream', img: 'https://hillstreetgrocer.com/application/files/7415/4295/3234/waffles_with_valhalla_ice_cream.jpg', des:'Crispy golden waffles topped with creamy vanilla ice cream, creating a delightful blend of warmth and sweetness.',price:7.50 },
        ],
        title: "Dessert", bgColor: "#704224", textColor: "#422301", icon: ''
    },
];
const styles = StyleSheet.create({
    container: {
       marginBottom: 50,
    },
    foodContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        padding: 10,
        borderRadius: 10,
        margin:12,
    },
    foodImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 10,
        resizeMode: 'cover',
        marginRight:20,
    },
    foodName: {
        width:"100%",
        fontSize: 20,
        fontWeight: 'bold',

    },
    sectionHeader: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        padding:10,
        borderBottomWidth:5,
        marginHorizontal:20,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    foodContent:{
        width:'60%',
    },
    foodDes:{
        width:200,
        fontSize:12,
        color:'#434343'
    },
    orderBtn:{
        paddingHorizontal:10,
        paddingVertical:5,
        color:"whitesmoke",
        fontWeight:'bold',
        alignItems:'center',
        borderRadius:5,
    },
    ViewButton:{
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'#12a2ee',
        color:'white',
        fontWeight:'bold',
    },
    ViewButtonText:{
        borderWidth:1,
        display:"flex",
        alignItems:"center",
        flexDirection:'row',
        justifyContent:"center",
        textAlign:'center',

    },
});

const ViewOrder=()=>{
    return(
        <View style={styles.ViewButton}>
            <Text style={styles.ViewButtonText}>Add Pokemon</Text>
        </View>
    );
}
const renderItem = ({ item,section}) => {
    return (
        <View style={styles.foodContainer}>
            <Image source={{ uri: item.img }} style={styles.foodImage} />
            <View style={styles.foodContent}>
                <Text style={styles.foodName}>{item.key}</Text>
                <Text style={styles.foodDes}>{item.des}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent:'space-between',width:185, }}>
                    <Text>${item.price}</Text>
                    <TouchableOpacity ><Text style={[styles.orderBtn,{ backgroundColor:section.bgColor,}]}>Order</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    );
};


const Myapp = () => {
    return (
        <View >
            <StatusBar hidden={true} />
            <View style={styles.container}>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, textColor, icon } }) => (
                    <View style={[{ borderColor: bgColor }, styles.sectionHeader]}>
                        <Text style={[styles.sectionTitle, { color: textColor }]}>
                            {title}
                        </Text>

                    </View>

                )}
            />
            </View>
        </View>
    );
};

export default Myapp;

