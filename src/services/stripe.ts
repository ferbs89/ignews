import Stripe from 'stripe';
import packageInfo from '../../package.json';

const { name, version } = packageInfo;

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name,
            version,
        }
    }
);
