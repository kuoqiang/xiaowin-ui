/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-16 18:00:12
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-31 11:52:36
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import './index.scss';
import { FloatProgress } from './Circle';
import ProgressInstance, { ProgressProps } from './Progress';

interface Progressface extends ProgressProps {
  WaveProgress: typeof FloatProgress;
}

const Progress = ProgressInstance as unknown as Progressface;

Progress.WaveProgress = FloatProgress;

export default Progress;
