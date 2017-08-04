export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'virtualrunph-app-uploads'
  },
  apiGateway: {
    URL: 'https://2sxtvh8133.execute-api.ap-southeast-1.amazonaws.com/prod',
    //URL:'https://z4fq1yh5f2.execute-api.ap-southeast-1.amazonaws.com/PROD',
    REGION: 'ap-southeast-1',
  },
  cognito: {
    REGION: 'ap-southeast-2',
    IDENTITY_POOL_ID: 'ap-southeast-2:ed84b093-9726-49ea-b976-d57e3683da08',
    USER_POOL_ID : 'ap-southeast-2_Iw2xtO8E2',
    APP_CLIENT_ID : '4fmu1k3568kv793v7f4k0nuj1o',
  }
};
