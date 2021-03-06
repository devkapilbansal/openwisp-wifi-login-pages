import {withCookies} from "react-cookie";
import {connect} from "react-redux";

import setOrganization from "../../actions/set-organization";
import Component from "./organization-wrapper";

const mapStateToProps = (state, ownProps) => {
  return {
    organization: state.organization,
    cookies: ownProps.cookies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrganization: (slug, cookies) => {
      dispatch(setOrganization(slug, cookies));
    },
  };
};
export default withCookies(
  connect(mapStateToProps, mapDispatchToProps)(Component),
);
