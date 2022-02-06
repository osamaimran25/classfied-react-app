import { post, get } from "../../requests";
import { categoryConstants } from "../actionTypes";

export const getCategories = () => {
  return {
    type: `${categoryConstants.GET_CATEGORIES}`,
    payload: get("/category/"),
  };
};
export const getSubCategories = (id) => {
  return {
    type: `${categoryConstants.GET_SUB_CATEGORIES}`,
    payload: get(`/category/${id}/subcategory/`),
  };
};
export const getCategoryFields = (id) => {
  return {
    type: `${categoryConstants.GET_CATEGORY_FIELDS}`,
    payload: get(`/catwithfields/${id}`),
  };
};
