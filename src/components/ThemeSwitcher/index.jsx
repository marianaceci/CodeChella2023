import { BsSunFill, BsMoonFill } from "react-icons/bs";

const sol = <BsSunFill />
const lua = <BsMoonFill />

export default (({theme}) => (theme ? sol : lua))