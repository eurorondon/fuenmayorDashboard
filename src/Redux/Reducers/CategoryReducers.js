import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_RESET,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  // CATEGORY_EDIT_FAIL,
  // CATEGORY_EDIT_REQUEST,
  // CATEGORY_EDIT_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  // CATEGORY_UPDATE_FAIL,
  // CATEGORY_UPDATE_REQUEST,
  // CATEGORY_UPDATE_RESET,
  // CATEGORY_UPDATE_SUCCESS,
} from "../Constants/CategoryConstants";

// GET PRODUCTS
export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE PRODUCT
export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, categories: action.payload };
    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// DELETE CATEGORY
export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// EDIT PRODUCT
// export const productEditReducer = (
//   state = { product: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_EDIT_REQUEST:
//       return { ...state, loading: true };
//     case PRODUCT_EDIT_SUCCESS:
//       return { loading: false, product: action.payload };
//     case PRODUCT_EDIT_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// UPDATE PRODUCT
// export const productUpdateReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_UPDATE_REQUEST:
//       return { loading: true };
//     case PRODUCT_UPDATE_SUCCESS:
//       return { loading: false, success: true, product: action.payload };
//     case PRODUCT_UPDATE_FAIL:
//       return { loading: false, error: action.payload };
//     case PRODUCT_UPDATE_RESET:
//       return { product: {} };
//     default:
//       return state;
//   }
// };
