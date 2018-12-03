// Libraries
import React from 'react';
import {Browser} from '@akiolabs/app';

// Styles
// TODO(mark): Make this import better.
import 'index.css';
import '@akiolabs/ui/src/styles/fonts/AvenirNext.css';

export const wrapRootElement = ({element}) => <Browser>{element}</Browser>;
