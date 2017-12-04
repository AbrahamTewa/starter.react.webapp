import { connect } from 'react-redux';
import Title from '../components/Title';


function mapStateToProps (state) {
    return { children: state.action.title };
}

const CurrentTitle = connect(mapStateToProps)(Title);

export default CurrentTitle;
