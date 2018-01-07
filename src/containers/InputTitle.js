// ============================================================
// Import packages
import { connect } from 'react-redux';

// ============================================================
// Import modules
import Input from '../components/Input';
import { setTitle } from '../redux/app';

// ============================================================
// Functions
function mapStateToProps(state) {
    return { title: state.action.title };
}

function mapDispatchToProps(dispatch) {
    return {
        onkeypress: (event) => {
            dispatch(setTitle(event.target.value));
        },
    };
}

// ============================================================
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Input);
