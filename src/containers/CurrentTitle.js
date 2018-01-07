// ============================================================
// Import packages
import { connect } from 'react-redux';

// ============================================================
// Import modules
import Title from '../components/Title';

// ============================================================
// Functions
function mapStateToProps(state) {
    return { children: state.action.title };
}

// ============================================================
// Exports
export default connect(mapStateToProps)(Title);
