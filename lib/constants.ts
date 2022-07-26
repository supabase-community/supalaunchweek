/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://launchweek-landing.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'supabase';
export const BRAND_NAME = 'Supabase';
export const SITE_NAME_MULTILINE = ['SUPALAUNCH', 'WEEK'];
export const SITE_NAME = 'Supabase';
export const META_DESCRIPTION = 'Join the Supabase Launch Week LIVE!';
export const SITE_DESCRIPTION = 'Join the Supabase Launch Week LIVE!';
export const DATE = '15 August 2022';
export const SHORT_DATE = 'Aug 15 - 9:00am PT';
export const FULL_DATE = 'Aug 15th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = 'Got my ticket for #SupaLaunchWeek 5!';
export const TWEET_TEXT_GOLDEN = `Woop! I got a Golden Ticket for #SupaLaunchWeek 5! SupaSwag on its way!`;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  // {
  //   name: 'Live Stage',
  //   route: '/stage/a'
  // },
  // {
  //   name: 'Vercel Stage',
  //   route: '/stage/c'
  // },
  // {
  //   name: '100ms Stage',
  //   route: '/stage/m'
  // },
  // {
  //   name: 'Schedule',
  //   route: '/schedule'
  // },
  // {
  //   name: 'Speakers',
  //   route: '/speakers'
  // },
  // {
  //   name: 'Expo',
  //   route: '/expo'
  // },
  {
    name: 'About',
    route: 'https://supabase.com/blog/2021/11/26/supabase-how-we-launch'
  },
  {
    name: 'Jobs',
    route: 'https://boards.greenhouse.io/supabase'
  }
];

export type TicketGenerationState = 'default' | 'loading';
