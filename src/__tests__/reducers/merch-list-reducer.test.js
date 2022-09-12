import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;

  const currentState = {
    1: {
      name: 'item',
      price: 10,
      description: 'test',
      quantity: 30,
      id: 1
    }, 2: {
      name: 'item2',
      price: 5,
      description: 'test',
      quantity: 30,
      id: 2
    }
  }

  const merchData = {
    name: 'new name',
    price: 10,
    description: 'test',
    quantity: 30,
    id: 1

  };

  test('Should return default state if no action type is recognized', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to mainMerchList', () => {
    const { name, price, description, quantity, id } = merchData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      id: id
    };
    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(merchListReducer(currentState, action)).toEqual({
      2: {
        name: 'item2',
        price: 5,
        description: 'test',
        quantity: 30,
        id: 2 
      }
    });
  });
});