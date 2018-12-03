// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {InfoItem, InfoLink, Styled} from 'components';

// Assets
import Combine from '../assets/combine.png';
import Explore from '../assets/explore.png';
import Export from '../assets/export.png';

const Container = Styled.View.extend`
`;

const InfoSection = () => (
  <Container>
    <InfoItem
      align={'right'}
      color={colors.white16}
      title={'Explore and Discover'}
      subtitle={(
        'Akio makes it easy to browse available data without having to write ' +
        'a single line of code. Start syncing to the latest events. Make a ' +
        'backfill request for anything that\'s not already there.'
      )}
      link={<InfoLink to={'/contact'}>Lookup a smart contract</InfoLink>}
      image={<img alt={'Explore'} src={Explore} style={{width: 433}} />}
    />
    <InfoItem
      align={'left'}
      color={colors.white4}
      title={'Query and Combine'}
      subtitle={(
        'Blockchain data is public and Akio makes it readily accessible. ' +
        'Drill down into the data to find details of a single address or ' +
        'run wild and deploy powerful SQL to combine data across the entire ' +
        'blockchain.'
      )}
      link={<InfoLink to={'/contact'}>See a sample query</InfoLink>}
      image={<img alt={'Combine'} src={Combine} style={{width: 428}} />}
    />
    <InfoItem
      align={'right'}
      color={colors.white16}
      title={'Export and Integrate'}
      subtitle={(
        'You own the data so you decide what to do with it. Schedule ' +
        'workflows to pipe it to your own databases and visualization ' +
        'tools, or sync with real-time tools like custom webhooks or ' +
        'notifications.'
      )}
      link={<InfoLink to={'/contact'}>Explore our integrations</InfoLink>}
      image={<img alt={'Export'} src={Export} style={{width: 423}} />}
    />
  </Container>
);

export default InfoSection;
