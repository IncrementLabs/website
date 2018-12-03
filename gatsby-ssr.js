// Libraries
import '@akiolabs/app/server';
import React from 'react';
import {Server} from '@akiolabs/app';

export const wrapRootElement = ({element}) => <Server>{element}</Server>;
