import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, CardBody, Button, InputGroup, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import PaymentsLineChart from './PaymentsLineChart';
import { toast } from 'react-toastify';
import FalconCardHeader from '../common/FalconCardHeader';
import ButtonIcon from '../common/ButtonIcon';

import loadable from '@loadable/component';
const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = () => {
  // State
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    // toast(
    //   <Fragment>
    //     Welcome to Aasaan
    //   </Fragment>
    // );
  }, []);

  return (
    <Fragment>
      {/* <PaymentsLineChart /> */}
      {/* <Card className="bg-light mb-3">
        <CardBody className="p-3">
          <p className="fs--1 mb-0">
            <Link to="#!">
              <FontAwesomeIcon icon="exchange-alt" transform="rotate-90" className="mr-2" />A payout for{' '}
              <strong>$921.42</strong> was deposited 13 days ago
            </Link>
            . Your next deposit is expected on <strong>Tuesday, March 13.</strong>
          </p>
        </CardBody>
      </Card> */}
      <div className="card-deck mt-3">
        <CardSummary rate="-0.23%" title="Total Customers" color="warning">
          58.39k
        </CardSummary>
        <CardSummary rate="0.0%" title="Total Orders Placed" color="info">
          73.46k
        </CardSummary>
        <CardSummary title="Referral Link" color="success">
          <span style={{fontSize: '15px'}}>https://demo.aasaan.app</span>
        </CardSummary>
      </div>
      <Card className="mb-3">
        <FalconCardHeader title="Referrals" light={false}>
          
        </FalconCardHeader>
        <CardBody className="p-0">
          <PurchasesTable setIsSelected={setIsSelected} />
        </CardBody>
      </Card>
      {/* <Row noGutters>
        <Col lg="4" className="pr-lg-2">
          <ActiveUsersBarChart />
        </Col>
        <Col lg="8" className="pl-lg-2">
          <ActiveUsersMap />
        </Col>
      </Row> */}
    </Fragment>
  );
};

export default Dashboard;
