import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';

import CardContentInfo from './CardContentInfo';

const useStyles = makeStyles(theme => ({
  content: {
    textAlign: 'left'
  }
}));

const BusinessCardContent = props => {
  const classes = useStyles();

  const {
    address1,
    address2,
    address3,
    city,
    state,
    zip_code
    // country,
    // display_address
  } = props.location;
  const { phone } = props;

  let line1 = '';
  let line2 = '';
  if (address1 !== '' && address1 !== null) {
    line1 += `${address1} `;
  }
  if (address2 !== '' && address2 !== null) {
    line1 += `${address2} `;
  }
  if (address3 !== '' && address3 !== null) {
    line1 += `${address3}`;
  }
  if (city !== '' && city !== null) {
    line2 += `${city}, `;
  }
  if (state !== '' && state !== 'null') {
    line2 += `${state} `;
  }
  if (zip_code !== '' && zip_code !== 'null') {
    line2 += `${zip_code}`;
  }

  const address = [line1, line2];

  return (
    <CardContent className={classes.content}>
      <CardContentInfo key='phone' data={phone} icon={<PhoneIcon />} />
      <CardContentInfo key='address' data={address} icon={<BusinessIcon />} />
    </CardContent>
  );
};

export default BusinessCardContent;
