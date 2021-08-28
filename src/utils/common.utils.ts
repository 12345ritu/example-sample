import moment from 'moment';

export const getLeftTimeDurationKey =(urlParams: any) => {
    return urlParams.appId + '__' + urlParams.appTestId;
  };

export const dateFormat = (date: any) => {
  return moment(date).format('MM/DD/YYYY');
}
