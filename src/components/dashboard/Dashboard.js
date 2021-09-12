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
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
        <CardSummary rate="45" title="Total Customers" color="warning">
          12
        </CardSummary>
        <CardSummary rate="-16" title="Total Orders Placed" color="info">
          821
        </CardSummary>
        <CardSummary title="Referral Link" color="success">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px'
          }}>
            <span style={{fontSize: '15px'}}>https://demo.aasaan.app/?referral=referrer</span>
            <CopyToClipboard text="https://demo.aasaan.app/?referral=referrer">
              <FontAwesomeIcon icon="copy" transform="down-1.5" className="ml-1" style={{fontSize: '20px'}}/>
            </CopyToClipboard>
          </div>
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
