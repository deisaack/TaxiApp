import { connect } from "react-redux";
import Home from "../components/Home";
import {
    setName, setAge
} from "../modules/home";

const mapStateToProps = (state) => ({
    name: state.home.name

});

const mapActionCreators = {
    setName, setAge
};
export default connect(mapStateToProps, mapActionCreators)(Home);