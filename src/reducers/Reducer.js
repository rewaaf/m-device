const Reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return state.concat([action.data]);
        case 'DELETE_DATA':
            return state.filter((result) => result.id !== action.id);
        case 'EDIT_DATA':
            return state.map((result) => result.id === action.id ? { ...result, editing: !result.editing } : result);
        case 'UPDATE':
            return state.map((result) => {
                if (result.id === action.id) {
                    return {
                        ...result,
                        name: action.data.nameNew,
                        Country: action.data.CountryNew,
                        City: action.data.CityNew,
                        address: action.data.addressNew,
                        PC: action.data.PCNew,
                        productType: action.data.productTypeNew,
                        productTradeName: action.data.productTradeNameNew,
                        ProductGenericName: action.data.ProductGenericNameNew,
                        ProductModelNumber: action.data.ProductModelNumberNew,
                        ProductDescription: action.data.ProductDescriptionNew,
                        ProductExiprationDate: action.data.ProductExiprationDateNew,
                        editing: !result.editing
                    }
                } else return result;
            })
        default:
            return state;
    }
}
export default Reducer;