import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ContactScreen, NotificationScreen, RequestScreen} from '../..';
import {
  CHILD_NOTIFICATION_ROUTE,
  CHILD_REQUEST_ROUTE,
  CHILD_CONTACT_ROUTE,
  CHILD_HOME_ROUTE,
  CHILD_VIDEO_ROUTE,
} from '../../../constants/navigation';
import {HomeStackScreen} from './stack';
import {VideoStackScreen} from '../../video/navigation';

const {Navigator, Screen} = createDrawerNavigator();

export const HomeDrawerScreen = () => (
  <Navigator>
    <Screen name={CHILD_HOME_ROUTE} component={HomeStackScreen} />
    <Screen name={CHILD_NOTIFICATION_ROUTE} component={NotificationScreen} />
    <Screen name={CHILD_REQUEST_ROUTE} component={RequestScreen} />
    <Screen name={CHILD_CONTACT_ROUTE} component={ContactScreen} />
    <Screen name={CHILD_VIDEO_ROUTE} component={VideoStackScreen} />
  </Navigator>
);

export const NestedNotificationDrawerScreen = () => (
  <Navigator>
    <Screen name={CHILD_REQUEST_ROUTE} component={RequestScreen} />
    <Screen name={CHILD_CONTACT_ROUTE} component={ContactScreen} />
  </Navigator>
);