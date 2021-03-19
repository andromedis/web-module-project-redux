import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            const newFeature = state.additionalFeatures.find(item => item.id === action.payload);
            return {
                additionalPrice: state.additionalPrice + newFeature.price,
                car: { 
                    ...state.car,
                    features: [
                        ...state.car.features,
                        newFeature,
                    ],
                },
                additionalFeatures: state.additionalFeatures.filter(item => {
                    return item.id !== newFeature.id;
                }),
            };
        case REMOVE_FEATURE:
            const oldFeature = state.car.features.find(item => item.id === action.payload);
            return {
                ...state,
                additionalPrice: state.additionalPrice - oldFeature.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => {
                        return item.id !== oldFeature.id;
                    }),
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    oldFeature,
                ],
            };
        default:
            return state;
    }
}

export default reducer;