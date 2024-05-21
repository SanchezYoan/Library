import { SHOW_HIDE } from "../constants";

const showHideComponent = (value) => ({
    type: SHOW_HIDE,
    payload: value
});


export default showHideComponent