import { generatePath } from 'react-router';

interface BaseRoutes {
  root: string;
  searchOrganization: string;
  detailMember: string;
}

export const appBaseRoutes: BaseRoutes = {
  root: '/',
  searchOrganization: '/search',
  detailMember: '/member'
};

type RouterSwitchRoutes = BaseRoutes;

export const detailMemberRouteParams = {
  userName : 'userName',
}

// We need to create this because we will include parameters
// e.g. '/detailMember/:memberId' this wiyll differ from the link
export const routerSwitchRoutes : RouterSwitchRoutes =  {
  ...appBaseRoutes,
  detailMember: `${appBaseRoutes.detailMember}/:${detailMemberRouteParams.userName}`,
}

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RoutesLinks = Omit<BaseRoutes, 'detailMember'> & {detailMember : (userName) => string};

// We need to create this because in future pages we will include parameters
// e.g. 'hotel: (hotelId) => /hotel/{hotelId}' this will differ from the route definition
export const routesLinks : RoutesLinks =  {
  ...appBaseRoutes,  
  detailMember: (userName) => generatePath(routerSwitchRoutes.detailMember, {userName}) 
}


