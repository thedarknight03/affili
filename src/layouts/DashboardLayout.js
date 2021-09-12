import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import NavbarTop from '../components/navbar/NavbarTop';
import Footer from '../components/footer/Footer';
import loadable from '@loadable/component';
import AppContext from '../context/Context';

const DashboardLayout = ({ location }) => {
  const { isFluid } = useContext(AppContext);

  useEffect(() => {
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {/* <NavbarVertical /> */}
      <div className="content">
        <NavbarTop />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
