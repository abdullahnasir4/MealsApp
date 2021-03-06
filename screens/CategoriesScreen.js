import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeal', 
                params: { //Params used as key (parameters)
                CategoryId: itemData.item.id 
                }});
        }} />;
    }
    return (
        <FlatList 
        keyExtractor={(item, index) => item.id} 
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Meal Categories',
    headerLeft: ( 
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    )};
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default CategoriesScreen;