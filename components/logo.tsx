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
// import IconLogo from './icons/icon-logo';
import styles from './logo.module.css';

export default function Logo({
  textSecondaryColor = 'var(--accents-5)',
  golden = false,
  className = ''
}) {
  return (
    // <div className={styles.logo}>
    //   <div className={styles.icon}>
    //     <IconLogo backgroundColor="var(--accents-1)" foregroundColor="black" golden={golden} />
    //   </div>
    //   <div className={styles.text}>
    //     <div>{SITE_NAME_MULTILINE[0]}</div>
    //     <div
    //       style={{ ['--color' as string]: textSecondaryColor }}
    //       className={styles['text-secondary']}
    //     >
    //       {SITE_NAME_MULTILINE[1]}
    //     </div>
    //   </div>
    // </div>
    <div className={cn(className, styles.logo)}>
      {/* <div className={styles.icon}>
        <IconLogo backgroundColor="var(--accents-1)" foregroundColor="black" golden={golden} />
      </div> */}
      <div className={styles.supabase}>
        <div>supabase</div>
      </div>
      <div className={styles.launchweek}>
        <div>LAUNCHWEEK</div>
      </div>
      <div className={styles.number}>
        <span>5</span>
      </div>
    </div>
  );
}
