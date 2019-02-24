import { connect } from 'react-redux';
import Explore from '../../components/Explore/Explore.component';

const mapStateToProps = state => ({ ideas: state.ideas });

export default connect(mapStateToProps, null)(Explore);
