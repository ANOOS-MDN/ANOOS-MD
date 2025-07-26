// config.js

import { config } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
const env = await config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

export const prefixes = env.PREFIX
    ? env.PREFIX.split(',').map(p => p.trim())
    : [''];

export const NUMBER = env.YOUR_NUMBER || '254742063632';
export const MODE = (env.MODE || 'private').toLowerCase().trim();
export const WARN_LIMIT = env.WARNINGS || '3';
export const ON = env.YOUR_NAME || 'FLASH-MD';
export const ANTICALL = env.ANTICALL || 'on';
export const ADM = env.ANTIDELETE || 'on';
export const AR = env.AUTO_REACTION || 'off';

export const AUTO_VIEW_STATUS = env.AUTO_READ_STATUS === 'on';
export const AUTO_LIKE = env.AUTO_LIKE === 'on';
export const AUTO_READ_MESSAGES = env.AUTO_READ_DM === 'on';
export const HEROKU_API_KEY = env.HEROKU_API_KEY;
export const HEROKU_APP_NAME = env.HEROKU_APP_NAME;
export const sessionBase64 = env.SESSION || '';
export const timezone = 'Africa/Nairobi';

export const USER_LID = env.YOUR_LID;

export const PRESENCE_DM = mapPresence(env.PRESENCE_DM || 'typing');
export const PRESENCE_GROUP = mapPresence(env.PRESENCE_GROUP || 'recording');

export { mapPresence };
