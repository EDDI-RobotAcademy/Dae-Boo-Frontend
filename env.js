const env = {
    mode: process.env.NODE_ENV,
    api: {
        MAIN_API_URL: process.env.VUE_APP_BASE_URL,
        S3_LINK: process.env.VUE_APP_S3_LINK,
        S3_Region : process.env.VUE_APP_S3_REGION,
        S3_PoolId : process.env.VUE_APP_S3_POOLID,
        S3_Bucket : process.env.VUE_APP_S3_BUCKET
    },
};

export default env;