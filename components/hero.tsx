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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';
import Logo from './logo';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <div className={styles.wrapper}>
      {/* <img
        src="/idea-2-lockup-hires.jpg"
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-desktop'],
          styles.heroImage
        )}
      /> */}
      {/* <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles.number)}>
        <img src="/5-number.svg" style={{ width: '100%' }} />
      </div> */}
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.logo)}>
        <img src={`${basePath}/supabase-launch-week-5.svg`} style={{ width: '100%' }} />
      </div>
      <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.info)}>
        {/* <h1 className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.hero)}>
        Welcome to the
        {BRAND_NAME} Launch Week!
      </h1> */}
        <p>August 15 - 19</p>
        <p>8:00 PT | 11:00 ET</p>
      </div>
      {/* <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-fourth'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2> */}
    </div>
  );
}
